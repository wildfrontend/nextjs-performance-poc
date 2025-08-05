import { Box, Paper, Stack, Typography, Divider, CircularProgress, Chip } from '@mui/material';
import React from 'react';

import { useFetchNextjsUser } from '@/apis/nextjs/user/client';

export const ProfileStatusCard: React.FC = () => {
  const { data, isAuth, isLoading, isFetching } = useFetchNextjsUser();
  const user = data?.data;

  return (
    <Paper elevation={2} sx={{ p: 3, bgcolor: '#f9fafb', maxWidth: 420 }}>
      <Stack direction="row" alignItems="center" gap={1} mb={1}>
        <Typography fontWeight="bold" variant="h6">
          Protected 狀態
        </Typography>
        {isFetching && (
          <CircularProgress size={20} thickness={5} color="info" sx={{ ml: 1 }} />
        )}
        {isFetching && (
          <Chip
            label="資料刷新中"
            color="info"
            size="small"
            variant="outlined"
            sx={{ ml: 1 }}
          />
        )}
      </Stack>
      <Divider sx={{ mb: 2 }} />
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ mb: 1 }}>
          <strong>登入狀態:</strong>{' '}
          <Chip
            label={isAuth ? '已登入' : '未登入'}
            color={isAuth ? 'success' : 'default'}
            size="small"
          />
        </Typography>
        {isAuth && user && (
          <Stack gap={2} sx={{ pl: 1 }}>
            <Box>
              <Typography variant="body2" color="text.secondary">
                <strong>姓名：</strong>
                <span style={{ letterSpacing: 1 }}>{user.name}</span>
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">
                <strong>Email：</strong>
                <span style={{ wordBreak: 'break-all' }}>{user.email}</span>
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">
                <strong>角色：</strong>
                <Chip label={user.role} color="primary" size="small" />
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
