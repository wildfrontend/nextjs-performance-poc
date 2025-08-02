import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

import { useLoginAuth } from '@/apis/dummyjson/auth/client';
import { useAuth } from '@/providers/auth/hook';

const username = 'emilys';
const password = 'emilyspass';

export const LoginForm: React.FC = () => {
  const { isAuth, user, logout } = useAuth();
  const { mutate: login, isPending, isAuthLoading } = useLoginAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(
      {
        username,
        password,
        expiresInMins: 1,
      },
      {
        onSuccess: (data: any) => {
          console.log('Login successful!', data);
        },
        onError: (error: any) => {
          console.error('Login failed!', error);
        },
      }
    );
  };

  if (isAuth && user) {
    return (
      <Paper elevation={2} sx={{ p: 3, bgcolor: '#e8f5e9' }}>
        <Typography fontWeight="bold" gutterBottom variant="h6">
          已登入
        </Typography>
        <Typography>
          歡迎, {user.firstName} {user.lastName}!
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Username: {user.username}
        </Typography>
        <Button
          color="error"
          onClick={logout}
          sx={{ mt: 2 }}
          variant="contained"
        >
          登出
        </Button>
      </Paper>
    );
  }

  return (
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography fontWeight="bold" gutterBottom variant="h6">
        DummyJSON 登入
      </Typography>
      <Box
        autoComplete="off"
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}
      >
        <TextField
          fullWidth
          label="Username"
          placeholder="輸入 username"
          required
          size="small"
          value={username}
        />
        <TextField
          fullWidth
          label="Password"
          placeholder="輸入 password"
          required
          size="small"
          type="password"
          value={password}
        />
        <Button
          color="primary"
          disabled={isPending || isAuthLoading}
          fullWidth
          sx={{ py: 1.5, fontWeight: 'bold' }}
          type="submit"
          variant="contained"
        >
          {isPending || isAuthLoading ? '登入中...' : '登入'}
        </Button>
      </Box>
      <Box sx={{ mt: 3, color: 'text.secondary', fontSize: 14 }}>
        <Typography>測試帳號:</Typography>
        <Typography>Username: emilys</Typography>
        <Typography>Password: emilyspass</Typography>
      </Box>
    </Paper>
  );
};
