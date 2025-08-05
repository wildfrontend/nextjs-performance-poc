import { Box, Paper, Stack, Typography, Divider, CircularProgress, Chip } from '@mui/material';
import React from 'react';

import { useFetchNextjsUser } from '@/apis/nextjs/user/client';

export const ProfileStatusCard: React.FC = () => {
  const { data, isAuth, isLoading, isFetching } = useFetchNextjsUser();
  const user = data?.data;

  return (
    <Paper elevation={2} sx={{ p: 3, bgcolor: '#f9fafb', maxWidth:"100%" }}>
      <Stack alignItems="center" direction="row" gap={1} mb={1}>
        <Typography fontWeight="bold" variant="h6">
          Protected 狀態
        </Typography>
        {isFetching && (
          <CircularProgress color="info" size={20} sx={{ ml: 1 }} thickness={5} />
        )}
        {isFetching && (
          <Chip
            color="info"
            label="資料刷新中"
            size="small"
            sx={{ ml: 1 }}
            variant="outlined"
          />
        )}
      </Stack>
      <Divider sx={{ mb: 2 }} />
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ mb: 1 }}>
          <strong>登入狀態:</strong>{' '}
          <Chip
            color={isAuth ? 'success' : 'default'}
            label={isAuth ? '已登入' : '未登入'}
            size="small"
          />
        </Typography>
        {isAuth && user && (
          <Stack gap={2} sx={{ pl: 1 }}>
            <Box>
              <Typography color="text.secondary" variant="body2">
                <strong>姓名：</strong>
                <span style={{ letterSpacing: 1 }}>{user.name}</span>
              </Typography>
            </Box>
            <Box>
              <Typography color="text.secondary" variant="body2">
                <strong>Email：</strong>
                <span style={{ wordBreak: 'break-all' }}>{user.email}</span>
              </Typography>
            </Box>
            <Box>
              <Typography color="text.secondary" variant="body2">
                <strong>角色：</strong>
                <Chip color="primary" label={user.role} size="small" />
              </Typography>
            </Box>
          </Stack>
        )}
        {!isAuth && (
          <Typography color="text.disabled" sx={{ mt: 2 }}>
            尚未登入，無法取得用戶資料。
          </Typography>
        )}
      </Box>
      {/* 額外: 開發時快速看完整資料 */}
      {isAuth && user && (
        <Box component="pre" sx={{
          bgcolor: '#eceff1',
          borderRadius: 1,
          p: 1,
          fontSize: 13,
          mt: 2,
          overflowX: 'auto'
        }}>
          {JSON.stringify(user, null, 4)}
        </Box>
      )}
    </Paper>
  );
};
