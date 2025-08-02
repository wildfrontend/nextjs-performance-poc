# Async-Lock 測試系統

這個測試系統用於驗證 async-mutex 在處理多個並發 API 請求時的 token 刷新機制是否正確工作。

## 功能概述

### 1. 多來源 API 支援

- **DummyJSON API**: 外部 API 服務
- **NextJS API**: 本地 API 路由

### 2. 自動 Token 管理

- 自動添加 Authorization header
- 自動處理 401 錯誤
- 自動刷新過期的 token

### 3. Async-Mutex 保護

- 防止多個並發請求同時刷新 token
- 確保 token 刷新的一致性
- 避免重複的刷新請求

## 測試端點

### NextJS API 端點

1. `/api/protected` - 受保護的端點，檢查 token 有效性
2. `/api/test-auth` - 測試端點，驗證 token
3. `/api/test-auth-expired` - 測試端點，總是返回 401 錯誤

### DummyJSON API 端點

1. `https://dummyjson.com/auth/me` - 獲取當前用戶信息

## 測試步驟

### 1. 基本測試

1. 使用測試帳號登入 (emilys / emilyspass)
2. 點擊「測試並發請求」按鈕
3. 觀察 console 日誌中的請求順序和錯誤處理

### 2. Token 過期測試

1. 登入後等待 token 過期（約 1 分鐘）
2. 點擊「測試多次過期請求」按鈕
3. 觀察是否只有一個 token 刷新請求被發起

### 3. 並發測試

1. 同時觸發多個會導致 401 錯誤的請求
2. 驗證 async-mutex 確保只有第一個請求觸發刷新
3. 其他請求應該等待刷新完成後重試

## 預期行為

### 正常情況

- 所有請求都成功完成
- 沒有重複的 token 刷新請求
- Console 中顯示正常的請求流程

### Token 過期情況

- 第一個遇到 401 的請求觸發 token 刷新
- 其他並發請求等待刷新完成
- 刷新成功後，所有請求重試並成功
- Console 中只顯示一次 "Unauthorized" 和刷新相關日誌

### 錯誤情況

- 如果刷新失敗，所有請求都會失敗
- 用戶會被自動登出
- Console 中顯示 "refresh client error"

## 技術實現

### Async-Mutex 使用

```typescript
const mutex = new Mutex();

async function refreshAuthTokenWithLock(args: RefreshTokenRequest) {
  if (refreshPromise) return refreshPromise;

  refreshPromise = mutex.runExclusive(async () => {
    try {
      return await refreshAuthToken(args);
    } finally {
      refreshPromise = null;
    }
  });
  return refreshPromise;
}
```

### Axios Interceptor

```typescript
const responseError = async (error: AxiosError<any>) => {
  if (error.response?.status === HttpStatusCode.Unauthorized) {
    try {
      await onRefreshToken({ refreshToken, expiresInMins: 1 });
    } catch (error) {
      onLogout();
    }
  }
  return Promise.reject(error);
};
```

## 監控和調試

### Console 日誌

- `Unauthorized` - 收到 401 錯誤
- `NextJS API Unauthorized` - NextJS API 的 401 錯誤
- `refresh client error` - token 刷新失敗

### 測試結果

- 實時顯示每個請求的狀態
- 顯示成功/失敗的請求數量
- 時間戳記錄請求執行順序

## 注意事項

1. **Token 過期時間**: 測試帳號的 token 過期時間設置為 1 分鐘
2. **重試限制**: 最多重試 1 次，避免無限循環
3. **並發數量**: 測試中最多同時發送 5 個請求
4. **錯誤處理**: 所有錯誤都會被捕獲並顯示在測試結果中

## 故障排除

### 常見問題

1. **請求失敗**: 檢查網絡連接和 API 端點可用性
2. **Token 刷新失敗**: 檢查 refresh token 是否有效
3. **並發問題**: 確認 async-mutex 正確配置

### 調試建議

1. 打開瀏覽器開發者工具
2. 查看 Network 標籤中的請求順序
3. 查看 Console 標籤中的日誌信息
4. 使用 React DevTools 檢查組件狀態
