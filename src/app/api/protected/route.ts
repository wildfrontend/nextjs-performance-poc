// app/api/protected/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');

  if (!authHeader || authHeader.includes('initial_token')) {
    return NextResponse.json(
      { error: 'Access token expired' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    message: `Access granted with token: ${authHeader}`,
  });
}
