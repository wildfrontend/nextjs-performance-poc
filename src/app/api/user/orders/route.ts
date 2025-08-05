import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

const secret = 'test-jwt';

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'No token' }, { status: 401 });
  }

  const token = auth.replace('Bearer ', '');

  try {
    const payload = jwt.verify(token, secret) as jwt.JwtPayload;

    // 假資料，實際專案請查資料庫
    const orders = [
      { id: 1, item: 'iPhone 15', price: 29999, owner: payload.username },
      { id: 2, item: 'MacBook Pro', price: 68999, owner: payload.username },
    ];

    return NextResponse.json({ orders });
  } catch (err) {
    return NextResponse.json(
      { error: 'Invalid or expired token' },
      { status: 401 }
    );
  }
}
