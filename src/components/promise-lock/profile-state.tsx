import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

import { useFetchNextjsUser } from '@/apis/nextjs/user/client';


export const ProfileStatusCard: React.FC = () => {
  const { data, isAuth } = useFetchNextjsUser();
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
          <Box component="pre" sx={{ mt: 1 }}>{JSON.stringify(data.data, null, 4)}</Box>
        )}
      </Box>
    </Paper>
  );
};
