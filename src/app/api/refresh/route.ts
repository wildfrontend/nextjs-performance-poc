// app/api/refresh/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  const newToken = 'new_token_' + Date.now();

  return NextResponse.json(
    {
      accessToken: newToken,
      message: 'Token refreshed successfully',
    },
    { status: 200 }
  );
}
