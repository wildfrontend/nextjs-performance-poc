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
    <Paper elevation={2} sx={{ p: 3, bgcolor: '#f9fafb', maxWidth: '100%' }}>
      <Stack alignItems="center" direction="row" gap={1} mb={1}>
        <Typography fontWeight="bold" variant="h6">
          Orders 狀態
        </Typography>
        {isFetching && (
          <CircularProgress color="info" size={20} thickness={5} />
        )}
        {isFetching && (
          <Chip
            color="info"
            label="刷新中"
            size="small"
            sx={{ ml: 1 }}
            variant="outlined"
          />
        )}
      </Stack>
      <Divider sx={{ mb: 2 }} />
      <Typography sx={{ mb: 1 }}>
        <strong>登入狀態:</strong>{' '}
        <Chip
          color={isAuth ? 'success' : 'default'}
          label={isAuth ? '已登入' : '未登入'}
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
                  elevation={0}
                  key={order.id}
                  sx={{
                    p: 2,
                    bgcolor: '#fff',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                  }}
                >
                  <Typography fontWeight="bold" sx={{ mb: 0.5 }}>
                    {order.item}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    訂單編號：{order.id}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    價格：${order.price.toLocaleString()}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
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
