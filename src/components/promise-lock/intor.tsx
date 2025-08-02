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
        可以嘗試同時發送多個 API 請求，async-mutex 會確保 token 管理的一致性
      </Typography>
      <Typography component="li">
        當 token 過期時，系統會自動嘗試刷新
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
              token
            </>
          }
        />
      </ListItem>
    </List>
  </Paper>
);
