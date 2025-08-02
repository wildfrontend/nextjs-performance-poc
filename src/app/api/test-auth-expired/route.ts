import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 總是返回 401 來模擬 token 過期
  return NextResponse.json(
    { error: 'Token expired - forced test endpoint' },
    { status: 401 }
  );
} 