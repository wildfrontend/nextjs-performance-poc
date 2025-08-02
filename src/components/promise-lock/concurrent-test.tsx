import {
  Box,
  Button,
  Paper,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';
import React, { useState } from 'react';

import {
  useFetchProtected,
  useFetchTestAuth,
  useFetchTestAuthExpired,
} from '@/apis/nextjs/auth/api';
import { useFetchAuthUser } from '@/apis/dummyjson/auth/client';

export const ConcurrentTestCard: React.FC = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [testResults, setTestResults] = useState<string[]>([]);

  // 使用現有的 hooks
  const { data: dummyjsonData, isAuth: dummyjsonAuth, run: runDummyjson } = useFetchAuthUser();
  const { data: protectedData, isAuth: protectedAuth, run: runProtected } = useFetchProtected();
  const { data: testAuthData, isAuth: testAuthAuth, run: runTestAuth } = useFetchTestAuth();
  const { data: testExpiredData, isAuth: testExpiredAuth, run: runTestExpired } = useFetchTestAuthExpired();

  const addResult = (message: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const clearResults = () => {
    setTestResults([]);
  };

  const testConcurrentRequests = async () => {
    setIsTesting(true);
    clearResults();
    
    addResult('開始並發測試...');
    
    try {
      // 同時觸發多個請求
      const promises = [
        runDummyjson().then(() => addResult('DummyJSON User: Success')).catch((error: any) => 
          addResult(`DummyJSON User: Error (${error.response?.status || 'N/A'}) - ${error.response?.data?.error || error.message}`)
        ),
        runProtected().then(() => addResult('NextJS Protected: Success')).catch((error: any) => 
          addResult(`NextJS Protected: Error (${error.response?.status || 'N/A'}) - ${error.response?.data?.error || error.message}`)
        ),
        runTestAuth().then(() => addResult('NextJS Test Auth: Success')).catch((error: any) => 
          addResult(`NextJS Test Auth: Error (${error.response?.status || 'N/A'}) - ${error.response?.data?.error || error.message}`)
        ),
        runTestExpired().then(() => addResult('NextJS Test Expired: Success')).catch((error: any) => 
          addResult(`NextJS Test Expired: Error (${error.response?.status || 'N/A'}) - ${error.response?.data?.error || error.message}`)
        ),
      ];

      await Promise.all(promises);
      addResult('並發測試完成');
    } catch (error) {
      addResult(`測試失敗: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsTesting(false);
    }
  };

  const testMultipleExpiredRequests = async () => {
    setIsTesting(true);
    clearResults();
    
    addResult('開始多次過期請求測試...');
    
    try {
      // 創建多個會觸發 401 的請求
      const promises = Array.from({ length: 5 }, (_, i) => 
        runTestExpired().then(() => addResult(`Expired Request ${i + 1}: Success`)).catch((error: any) => 
          addResult(`Expired Request ${i + 1}: Error (${error.response?.status || 'N/A'}) - ${error.response?.data?.error || error.message}`)
        )
      );

      await Promise.all(promises);
      addResult('多次過期測試完成');
    } catch (error) {
      addResult(`多次過期測試失敗: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 3, bgcolor: '#fff3e0' }}>
      <Typography fontWeight="bold" gutterBottom variant="h6">
        並發 API 測試
      </Typography>
      
      <Alert severity="info" sx={{ mb: 2 }}>
        這個測試會同時發送多個 API 請求來驗證 async-mutex 是否正確防止重複的 token 刷新。
        請打開瀏覽器的開發者工具查看 console 日誌。
      </Alert>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Button
          variant="contained"
          onClick={testConcurrentRequests}
          disabled={isTesting || !dummyjsonAuth}
          startIcon={isTesting ? <CircularProgress size={16} /> : null}
        >
          測試並發請求
        </Button>
        
        <Button
          variant="contained"
          color="warning"
          onClick={testMultipleExpiredRequests}
          disabled={isTesting || !dummyjsonAuth}
          startIcon={isTesting ? <CircularProgress size={16} /> : null}
        >
          測試多次過期請求
        </Button>
        
        <Button
          variant="outlined"
          onClick={clearResults}
          disabled={isTesting}
        >
          清除結果
        </Button>
      </Box>

      <Box sx={{ maxHeight: 300, overflow: 'auto', bgcolor: '#f5f5f5', p: 2, borderRadius: 1 }}>
        {testResults.length === 0 ? (
          <Typography color="text.secondary">點擊按鈕開始測試...</Typography>
        ) : (
          testResults.map((result, index) => (
            <Typography key={index} variant="body2" sx={{ mb: 0.5, fontFamily: 'monospace' }}>
              {result}
            </Typography>
          ))
        )}
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary">
          預期行為：當多個請求同時遇到 401 錯誤時，只有第一個請求會觸發 token 刷新，
          其他請求會等待刷新完成後重試，而不是同時發起多個刷新請求。
          請查看 console 中的 "Unauthorized" 和 "refresh client error" 日誌來驗證。
        </Typography>
      </Box>
    </Paper>
  );
}; 