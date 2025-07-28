'use client';

import { useState } from 'react';

let accessToken = 'initial_token';
let refreshTokenPromise: Promise<void> | null = null;

// 改成呼叫 API
async function refreshToken(): Promise<void> {
  console.log('🔁 呼叫 /api/refresh 刷新 token...');

  const res = await fetch('/api/refresh', {
    method: 'POST',
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Refresh token failed');
  }

  const data = await res.json();
  accessToken = data.accessToken;
  console.log('✅ Token refreshed:', accessToken);
}

// 改用 fetch 呼叫 Next.js App Router API
async function fakeApi(name: string): Promise<string> {
  const res = await fetch('/api/protected', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    const err = await res.json();
    throw { response: { status: res.status }, message: err.error || 'API failed' };
  }

  const data = await res.json();
  return `[🚀] ${name} 成功：${data.message}`;
}

async function callWithTokenRetry(name: string): Promise<string> {
  try {
    return await fakeApi(name);
  } catch (err: any) {
    if (err.response?.status === 401) {
      if (!refreshTokenPromise) {
        refreshTokenPromise = refreshToken().finally(() => {
          refreshTokenPromise = null;
        });
      }
      await refreshTokenPromise;
      return await fakeApi(name); // retry after refresh
    }
    throw err;
  }
}

const PromiseLockDemo = () => {
  const [logs, setLogs] = useState<string[]>([]);

  const log = (msg: string) => {
    setLogs((prev) => [...prev, msg]);
  };

  const handleClick = async () => {
    setLogs([]); // 清除舊紀錄
    const apis = ['API A', 'API B', 'API C'];

    await Promise.all(
      apis.map(async (name) => {
        try {
          const result = await callWithTokenRetry(name);
          log(result);
        } catch (e) {
          log(`[❌] ${name} 失敗: ${(e as any).message}`);
        }
      })
    );
  };

  return (
    <div>
      <h2>🔒 Promise Lock Token Refresh Demo</h2>
      <button onClick={handleClick}>發送三個 API（模擬過期）</button>
      <div style={{ marginTop: 16 }}>
        {logs.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default PromiseLockDemo;
