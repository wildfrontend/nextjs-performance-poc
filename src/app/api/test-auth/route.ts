import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'No token provided' }, { status: 401 });
  }

  const token = authHeader.substring(7);

  // 模擬 token 過期檢查 - 這裡可以根據實際需求調整邏輯
  // 例如檢查 token 是否包含 "expired" 字串來模擬過期
  if (token.includes('expired') || token.length < 10) {
    return NextResponse.json({ error: 'Token expired' }, { status: 401 });
  }

  return NextResponse.json({
    message: 'Token is valid',
    token: token.substring(0, 20) + '...',
    timestamp: new Date().toISOString(),
    source: 'NextJS API',
  });
}
