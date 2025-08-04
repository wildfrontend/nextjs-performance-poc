import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const secret = 'test-jwt';

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization')
  if (!auth || !auth.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'No token' }, { status: 401 })
  }

  const token = auth.replace('Bearer ', '')

  try {
    const payload = jwt.verify(token, secret) as jwt.JwtPayload
    // 這裡根據 payload 回傳用戶資料（假設是 username）
    return NextResponse.json({
      name: 'Test User',
      email: `${payload.username}@example.com`,
      role: 'user',
    })
  } catch (err) {
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 })
  }
}
