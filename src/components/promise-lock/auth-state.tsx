import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';

import useAuth from '@/hooks/auth/auth';

function useHighlightOnChange<T>(value: T, duration = 800) {
  const [highlight, setHighlight] = useState(false);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      setHighlight(true);
      const timer = setTimeout(() => setHighlight(false), duration);
      return () => clearTimeout(timer);
    }
    prevValue.current = value;
  }, [value, duration]);
  return highlight;
}

export const AuthStateCard = () => {
  const { isAuth, isRefreshing, accessToken } = useAuth();

  // 用自訂 hook 監控每個欄位變動
  const isAuthChanged = useHighlightOnChange(isAuth);
  const isRefreshingChanged = useHighlightOnChange(isRefreshing);
  const accessTokenChanged = useHighlightOnChange(accessToken);

  return (
    <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
      <Typography fontWeight="bold" gutterBottom>
        Auth 狀態
      </Typography>
      <Box>
        <span
          style={{
            transition: 'background 0.4s',
            background: isAuthChanged ? '#ffe082' : undefined,
            borderRadius: 4,
            padding: '2px 6px',
            marginRight: 8,
          }}
        >
          <strong>isAuth:</strong> {String(isAuth)}
        </span>
      </Box>
      <Box>
        <span
          style={{
            transition: 'background 0.4s',
            background: isRefreshingChanged ? '#b3e5fc' : undefined,
            borderRadius: 4,
            padding: '2px 6px',
            marginRight: 8,
          }}
        >
          <strong>isRefreshing:</strong> {String(isRefreshing)}
        </span>
      </Box>
      <Box>
        <span
          style={{
            transition: 'background 0.4s',
            background: accessTokenChanged ? '#c8e6c9' : undefined,
            borderRadius: 4,
            padding: '2px 6px',
            marginRight: 8,
            wordBreak: 'break-all',
            display: 'inline-block',
            maxWidth: 350,
          }}
        >
          <strong>accessToken:</strong>{' '}
          {accessToken ? accessToken.slice(0, 10) + '...' : 'null'}
        </span>
      </Box>
    </Box>
  );
};
