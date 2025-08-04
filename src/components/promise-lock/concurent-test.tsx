'use client';

import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import { getNextjsProfile, getNextjsUserOrder } from '@/apis/nextjs/user/api';

type ApiTestResult = {
  name: string;
  status: 'idle' | 'pending' | 'success' | 'error';
  result?: any;
  error?: any;
};

const apis = [
  { name: 'getProfile', func: getNextjsProfile },
  { name: 'getOrders', func: getNextjsUserOrder },
  { name: 'getProfile2', func: getNextjsProfile },
];

export const ConcurrentApiTestCard: React.FC = () => {
  const [results, setResults] = useState<ApiTestResult[]>(
    apis.map((api) => ({ name: api.name, status: 'idle' }))
  );
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const handleTest = async () => {
    setStartTime(Date.now());
    setEndTime(null);
    setResults(apis.map((api) => ({ name: api.name, status: 'pending' })));

    // 模擬同時發多個 api
    await Promise.all(
      apis.map(async (api, idx) => {
        try {
          const res = await api.func();
          setResults((prev) => {
            const copy = [...prev];
            copy[idx] = { ...copy[idx], status: 'success', result: res.data };
            return copy;
          });
        } catch (err) {
          setResults((prev) => {
            const copy = [...prev];
            copy[idx] = { ...copy[idx], status: 'error', error: err };
            return copy;
          });
        }
      })
    );
    setEndTime(Date.now());
  };

  return (
    <Paper elevation={2} sx={{ p: 3, bgcolor: '#f5f7ff' }}>
      <Typography fontWeight="bold" gutterBottom variant="h6">
        並發 API 鎖測試（只允許一個 refreshToken，其餘等待）
      </Typography>
      <Typography sx={{ mb: 2, color: 'text.secondary' }}>
        測試步驟：
        <br />
        1. 先登入，等待 accessToken 過期（約 10 秒）
        <br />
        2. 點下方按鈕同時觸發多個保護 API <br />
        3. 可以打開 devtool 觀察：只 refresh 一次，其餘 api 等 token 拿到後重發
      </Typography>
      <Button
        disabled={results.some((r) => r.status === 'pending')}
        onClick={handleTest}
        variant="contained"
      >
        同時發 3 個 API（測試 refreshToken 鎖）
      </Button>
      <Box sx={{ mt: 3 }}>
        {results.map((r, idx) => (
          <Box
            key={r.name}
            sx={{
              p: 2,
              mb: 2,
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              bgcolor: '#fff',
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {r.name}
            </Typography>
            {r.status === 'pending' && (
              <Stack direction="row" alignItems="center" spacing={1}>
                <CircularProgress size={18} />
                <span>等待中...</span>
              </Stack>
            )}
            {r.status === 'success' && (
              <Box component="pre" sx={{ mt: 1, color: 'green', fontSize: 13 }}>
                {JSON.stringify(r.result, null, 2)}
              </Box>
            )}
            {r.status === 'error' && (
              <Box component="pre" sx={{ mt: 1, color: 'red', fontSize: 13 }}>
                {JSON.stringify(r.error, null, 2)}
              </Box>
            )}
          </Box>
        ))}
      </Box>
      {startTime && endTime && (
        <Typography color="text.secondary" fontSize={13}>
          全部完成，用時 {((endTime - startTime) / 1000).toFixed(2)} 秒
        </Typography>
      )}
    </Paper>
  );
};
