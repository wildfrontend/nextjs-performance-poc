import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
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

// accessToken log type
interface AccessTokenLog {
  token: string | null;
  time: string;
}

export const AuthStateCard = () => {
  const { isAuth, isRefreshing, accessToken } = useAuth();

  const isAuthChanged = useHighlightOnChange(isAuth);
  const isRefreshingChanged = useHighlightOnChange(isRefreshing);
  const accessTokenChanged = useHighlightOnChange(accessToken);

  // accessToken log history
  const [tokenLogs, setTokenLogs] = useState<AccessTokenLog[]>([]);

  // 當 accessToken 變更時，累加紀錄
  const prevAccessTokenRef = useRef<string | null>(null);
  useEffect(() => {
    if (prevAccessTokenRef.current !== accessToken) {
      setTokenLogs((logs) => [
        {
          token: accessToken ?? null,
          time: new Date().toLocaleString(),
        },
        ...logs, // 最新的排最上面
      ]);
      prevAccessTokenRef.current = accessToken ?? null;
    }
  }, [accessToken]);

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
          <strong>Current accessToken:</strong>{' '}
          {accessToken ? accessToken : 'null'}
        </span>
      </Box>
      {/* accessToken 更換紀錄 */}
      <Box sx={{ mt: 3 }}>
        <Typography sx={{ mb: 1 }} variant="subtitle2">
          accessToken 更換紀錄 (最新在上)
        </Typography>
        <Box
          component="ul"
          sx={{
            m: 0,
            p: 0,
            listStyle: 'none',
            maxHeight: 160,
            overflowY: 'auto',
            bgcolor: '#eceff1',
            borderRadius: 1,
            fontSize: 13,
          }}
        >
          {tokenLogs.length === 0 ? (
            <Typography color="text.disabled" sx={{ px: 1, py: 0.5 }}>
              尚未紀錄任何 accessToken
            </Typography>
          ) : (
            tokenLogs.map((log, i) => (
              <li key={i} style={{ borderBottom: i < tokenLogs.length - 1 ? '1px solid #e0e0e0' : 'none', padding: '4px 8px' }}>
                <strong>{log.time}</strong>
                <div style={{ wordBreak: 'break-all', fontFamily: 'monospace' }}>
                  {log.token || <span style={{ color: '#aaa' }}>null</span>}
                </div>
              </li>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};
