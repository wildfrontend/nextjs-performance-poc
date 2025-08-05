import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

import { useFetchUserOrder } from '@/apis/nextjs/user/client';

export const OrdersCard: React.FC = () => {
  const { data, isAuth } = useFetchUserOrder();
  const user = data?.data;
  return (
    <Paper elevation={2} sx={{ p: 3, bgcolor: '#f9fafb' }}>
      <Typography fontWeight="bold" gutterBottom variant="h6">
        Orders 狀態
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography>
          <strong>登入狀態:</strong> {isAuth ? '已登入' : '未登入'}
        </Typography>
        {isAuth && user && (
          <Box component="pre" sx={{ mt: 1 }}>
            {JSON.stringify(data.data, null, 4)}
          </Box>
        )}
      </Box>
    </Paper>
  );
};
