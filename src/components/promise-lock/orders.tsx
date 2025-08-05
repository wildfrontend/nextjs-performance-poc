import {
  Box,
  Chip,
  CircularProgress,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

import { useFetchUserOrder } from '@/apis/nextjs/user/client';

export const OrdersCard: React.FC = () => {
  const { data, isAuth, loading: isFetching } = useFetchUserOrder();
  const orders = data?.data?.orders || [];

  return (
    <Paper elevation={2} sx={{ p: 3, bgcolor: '#f9fafb', maxWidth: 450 }}>
      <Stack direction="row" alignItems="center" gap={1} mb={1}>
        <Typography fontWeight="bold" variant="h6">
          Orders 狀態
        </Typography>
        {isFetching && (
          <CircularProgress size={20} thickness={5} color="info" />
        )}
        {isFetching && (
          <Chip
            label="刷新中"
            color="info"
            size="small"
            variant="outlined"
            sx={{ ml: 1 }}
          />
        )}
      </Stack>
      <Divider sx={{ mb: 2 }} />
      <Typography sx={{ mb: 1 }}>
        <strong>登入狀態:</strong>{' '}
        <Chip
          label={isAuth ? '已登入' : '未登入'}
          color={isAuth ? 'success' : 'default'}
          size="small"
        />
      </Typography>
      {isAuth && (
        <Box>
          {orders.length === 0 ? (
            <Typography color="text.disabled" sx={{ mt: 2 }}>
              沒有任何訂單。
            </Typography>
          ) : (
            <Stack spacing={2}>
              {orders.map((order: any) => (
                <Paper
                  key={order.id}
                  sx={{
                    p: 2,
                    bgcolor: '#fff',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                  }}
                  elevation={0}
                >
                  <Typography fontWeight="bold" sx={{ mb: 0.5 }}>
                    {order.item}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    訂單編號：{order.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    價格：${order.price.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    持有者：{order.owner}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          )}
        </Box>
      )}
      {!isAuth && (
        <Typography color="text.disabled" sx={{ mt: 2 }}>
          尚未登入，無法取得訂單資料。
        </Typography>
      )}
    </Paper>
  );
};
