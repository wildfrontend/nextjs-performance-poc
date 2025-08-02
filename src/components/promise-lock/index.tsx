'use client';

import { useAuth } from '@/providers/auth';
import { LoginForm } from '../auth/login-form';

const PromiseLockDemo = () => {
  const { isAuth, accessToken, user } = useAuth();
  
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <LoginForm />
        </div>
        <div className="p-4 border rounded-lg bg-gray-50">
          <h2 className="text-lg font-semibold mb-4">Auth 狀態</h2>
          <div className="space-y-2">
            <p>
              <strong>登入狀態:</strong> {isAuth ? '已登入' : '未登入'}
            </p>
            {isAuth && (
              <>
                <p>
                  <strong>Username:</strong> {user?.username}
                </p>
                <p>
                  <strong>Email:</strong> {user?.email}
                </p>
                <p>
                  <strong>姓名:</strong> {user?.firstName} {user?.lastName}
                </p>
                <p>
                  <strong>Token:</strong>
                  <span className="text-xs break-all">
                    {accessToken ? `${accessToken.substring(0, 20)}...` : '無'}
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 border rounded-lg bg-blue-50">
        <h2 className="text-lg font-semibold mb-4">功能說明</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Async Mutex:</strong> 使用 async-mutex
            確保並發請求時不會重複獲取或刷新 token
          </li>
          <li>
            <strong>自動 Token 管理:</strong> Axios interceptor 自動添加
            authorization header
          </li>
          <li>
            <strong>自動 Token 刷新:</strong> 當收到 401 錯誤時自動嘗試刷新
            token
          </li>
        </ul>
      </div>

      <div className="mt-8 p-4 border rounded-lg bg-yellow-50">
        <h2 className="text-lg font-semibold mb-4">測試步驟</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>使用測試帳號登入 (emilys / emilyspass)</li>
          <li>登入成功後會看到用戶資訊和 token</li>
          <li>
            可以嘗試同時發送多個 API 請求，async-mutex 會確保 token 管理的一致性
          </li>
          <li>當 token 過期時，系統會自動嘗試刷新</li>
        </ol>
      </div>
    </div>
  );
};

export default PromiseLockDemo;
