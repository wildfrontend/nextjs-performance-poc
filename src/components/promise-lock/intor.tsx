import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

export const TestStepsCard: React.FC = () => (
  <Paper elevation={1} sx={{ p: 3, bgcolor: '#fffde7' }}>
    <Typography fontWeight="bold" gutterBottom variant="h6">
      測試步驟
    </Typography>
    <Box component="ol" sx={{ pl: 3 }}>
      <Typography component="li" sx={{ mb: 1 }}>
        使用測試帳號登入 (emilys / emilyspass)
      </Typography>
      <Typography component="li" sx={{ mb: 1 }}>
        登入成功後會看到用戶資訊和 token
      </Typography>
      <Typography component="li" sx={{ mb: 1 }}>
        點擊「測試並發請求」按鈕，同時發送多個 API 請求到不同來源
      </Typography>
      <Typography component="li" sx={{ mb: 1 }}>
        點擊「測試多次過期請求」按鈕，同時發送多個會觸發 401 的請求
      </Typography>
      <Typography component="li" sx={{ mb: 1 }}>
        觀察 console 日誌，確認 async-mutex 確保只有一個 token 刷新請求
      </Typography>
      <Typography component="li">
        當 token 過期時，系統會自動嘗試刷新，其他請求會等待刷新完成
      </Typography>
    </Box>
  </Paper>
);

export const FeatureIntroCard: React.FC = () => (
  <Paper elevation={1} sx={{ p: 3, bgcolor: '#e3f2fd' }}>
    <Typography fontWeight="bold" gutterBottom variant="h6">
      功能說明
    </Typography>
    <List>
      <ListItem>
        <ListItemText
          primary={
            <>
              <strong>Async Mutex:</strong> 使用 async-mutex
              確保並發請求時不會重複獲取或刷新 token
            </>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={
            <>
              <strong>多來源 API 支援:</strong> 同時支援 DummyJSON 和 NextJS API 的 token 管理
            </>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={
            <>
              <strong>自動 Token 管理:</strong> Axios interceptor 自動添加
              authorization header
            </>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={
            <>
              <strong>自動 Token 刷新:</strong> 當收到 401 錯誤時自動嘗試刷新
              token，並防止重複刷新
            </>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={
            <>
              <strong>並發測試:</strong> 提供測試工具驗證 async-lock 在實際並發場景中的效果
            </>
          }
        />
      </ListItem>
    </List>
  </Paper>
);
