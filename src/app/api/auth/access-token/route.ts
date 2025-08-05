import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

const secret = 'test-jwt';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  // 這裡用假資料，實際上你要查資料庫
  if (username === 'user' && password === 'pass') {
    const payload = { username };

    // 產生 access token，通常5~30分鐘
    const accessToken = jwt.sign(payload, secret, { expiresIn: '10s' });
    // 產生 refresh token，可以比較長
    const refreshToken = jwt.sign(payload, secret, { expiresIn: '1h' });

    return NextResponse.json({ accessToken, refreshToken });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
