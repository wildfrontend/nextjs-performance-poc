import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

const secret = 'test-jwt';

export async function POST(req: NextRequest) {
  const { refreshToken } = await req.json();

  try {
    // 驗證傳入的 refreshToken
    const payload = jwt.verify(refreshToken, secret) as jwt.JwtPayload;

    // 產生新 accessToken（短效）
    const newAccessToken = jwt.sign({ username: payload.username }, secret, {
      expiresIn: '10s',
    });

    // 產生新 refreshToken（長效）
    const newRefreshToken = jwt.sign({ username: payload.username }, secret, {
      expiresIn: '1h',
    });

    return NextResponse.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Invalid refresh token', errorCode: 'Unauthorized' },
      { status: 401 }
    );
  }
}
