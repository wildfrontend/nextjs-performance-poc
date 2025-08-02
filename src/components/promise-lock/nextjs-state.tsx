import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

import { useFetchProtected } from '@/apis/nextjs/auth/api';

// 路徑依你的專案

export const ProtectedStatusCard: React.FC = () => {
  const { data, isAuth } = useFetchProtected();
  const user = data?.data;
  return (
    <Paper elevation={2} sx={{ p: 3, bgcolor: '#f9fafb' }}>
      <Typography fontWeight="bold" gutterBottom variant="h6">
        Protected 狀態
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography>
          <strong>登入狀態:</strong> {isAuth ? '已登入' : '未登入'}
        </Typography>
        {isAuth && user && (
          <Box sx={{ mt: 1 }}>{JSON.stringify(data, null, 2)}</Box>
        )}
      </Box>
    </Paper>
  );
};
