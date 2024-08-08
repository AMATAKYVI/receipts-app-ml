import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'hi hi' }, { status: 201 });
}
