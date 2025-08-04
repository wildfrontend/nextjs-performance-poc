import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

const secret = 'test-jwt';

export async function POST(req: NextRequest) {
  const { refreshToken } = await req.json();

  try {
    // 驗證 refreshToken
    const payload = jwt.verify(refreshToken, secret) as jwt.JwtPayload;

    // 產生新 accessToken
    const newAccessToken = jwt.sign({ username: payload.username }, secret, {
      expiresIn: '10s',
    });

    return NextResponse.json({ accessToken: newAccessToken });
  } catch (err) {
    return NextResponse.json(
      { error: 'Invalid refresh token', errorCode: 'Unauthorized' },
      { status: 401 }
    );
  }
}
