import { useState } from "react";

// 全域 accessToken（實際情況你可能用 context 或其他 state 管理）
let accessToken = "initial_token";
let refreshTokenPromise: Promise<void> | null = null;

// 模擬 refresh token API
function refreshToken(): Promise<void> {
  console.log("🔁 Refreshing token...");
  return new Promise((resolve) => {
    setTimeout(() => {
      accessToken = "new_token_" + Date.now();
      console.log("✅ Token refreshed:", accessToken);
      resolve();
    }, 1000);
  });
}

// 模擬 API 請求
function fakeApi(name: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (accessToken === "initial_token") {
        // 模擬過期
        reject({ response: { status: 401 }, message: `${name} token expired` });
      } else {
        resolve(`[🚀] ${name} 成功 with ${accessToken}`);
      }
    }, 300);
  });
}

// 包裝 API，加入 token refresh lock 機制
async function callWithTokenRetry(name: string): Promise<string> {
  try {
    return await fakeApi(name);
  } catch (err: any) {
    if (err.response?.status === 401) {
      // 如果沒在 refresh，就開始 refresh
      if (!refreshTokenPromise) {
        refreshTokenPromise = refreshToken().finally(() => {
          refreshTokenPromise = null;
        });
      }
      await refreshTokenPromise;
      return await fakeApi(name); // retry
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
    const apis = ["API A", "API B", "API C"];

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
