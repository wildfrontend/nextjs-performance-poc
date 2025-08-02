import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

import useAuth from '@/hooks/auth/auth';

const username = 'emilys';
const password = 'emilyspass';

export const LoginForm: React.FC = () => {
  const { isRefreshing, isAuthorizing, onLogin } = useAuth();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ username, password, expiresInMins: 1 });
  };

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
          disabled={isRefreshing || isAuthorizing}
          fullWidth
          sx={{ py: 1.5, fontWeight: 'bold' }}
          type="submit"
          variant="contained"
        >
          {isRefreshing || isAuthorizing ? '登入中...' : '登入'}
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
