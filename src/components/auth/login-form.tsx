import React, { useState } from 'react';
import { useAuth } from '@/providers/auth/useAuth';
import { useLoginAuth } from '@/apis/dummyjson/auth/client';

export const LoginForm: React.FC = () => {
  const { isAuth, user, logout } = useAuth();
  const { mutate: login, isPending, isAuthLoading } = useLoginAuth();
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    login({
      username,
      password,
      expiresInMins: 1, // 1 分鐘過期，方便測試
    }, {
      onSuccess: (data: any) => {
        console.log('Login successful!', data);
        setUsername('');
        setPassword('');
      },
      onError: (error: any) => {
        console.error('Login failed!', error);
      }
    });
  };

  const handleLogout = () => {
    logout();
  };

  if (isAuth && user) {
    return (
      <div className="p-4 border rounded-lg bg-green-50">
        <h2 className="text-lg font-semibold mb-2">已登入</h2>
        <p>歡迎, {user.firstName} {user.lastName}!</p>
        <p className="text-sm text-gray-600">Username: {user.username}</p>
        <button
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleLogout}
        >
          登出
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">DummyJSON 登入</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Username:</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="輸入 username"
            required
            type="text"
            value={username}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password:</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="輸入 password"
            required
            type="password"
            value={password}
          />
        </div>
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={isPending || isAuthLoading}
          type="submit"
        >
          {isPending || isAuthLoading ? '登入中...' : '登入'}
        </button>
      </form>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>測試帳號:</p>
        <p>Username: emilys</p>
        <p>Password: emilyspass</p>
      </div>
    </div>
  );
}; 