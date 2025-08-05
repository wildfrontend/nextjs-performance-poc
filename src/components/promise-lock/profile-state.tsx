import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { useToggle } from 'ahooks';
import React from 'react';

import { useFetchNextjsUser } from '@/apis/nextjs/user/client';

export const ProfileStatusCard: React.FC = () => {
  const [enabledLongpoll, { toggle: toggleLongPoll }] = useToggle();
  const { data, isAuth } = useFetchNextjsUser({ enabledLongpoll });
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
          <Stack gap={3}>
            <Box component="pre" sx={{ mt: 1 }}>
              {JSON.stringify(data.data, null, 4)}
            </Box>
            <Button
              color={enabledLongpoll ? 'success' : 'primary'}
              onClick={toggleLongPoll}
              variant={enabledLongpoll ? 'contained' : 'outlined'}
            >
              {enabledLongpoll ? '停止長循環' : '啟動長循環'}
            </Button>
          </Stack>
        )}
      </Box>
    </Paper>
  );
};
