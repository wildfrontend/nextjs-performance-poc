import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

import { useAuth } from '@/providers/auth/hook';

// 路徑依你的專案

export const AuthStatusCard: React.FC = () => {
  const { isAuth, user, accessToken } = useAuth();
  return (
    <Paper elevation={2} sx={{ p: 3, bgcolor: '#f9fafb' }}>
      <Typography fontWeight="bold" gutterBottom variant="h6">
        Auth 狀態
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography>
          <strong>登入狀態:</strong> {isAuth ? '已登入' : '未登入'}
        </Typography>
        {isAuth && user && (
          <Box sx={{ mt: 1 }}>
            <Typography>
              <strong>Username:</strong> {user.username}
            </Typography>
            <Typography>
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography>
              <strong>姓名:</strong> {user.firstName} {user.lastName}
            </Typography>
            <Typography>
              <strong>Token:</strong>
              <Box
                component="span"
                sx={{ fontSize: 12, wordBreak: 'break-all', ml: 1 }}
              >
                {accessToken ? `${accessToken.substring(0, 20)}...` : '無'}
              </Box>
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};
