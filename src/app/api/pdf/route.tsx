// app/api/upload/route.ts
import pdfParse from 'pdf-parse';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.formData();
  const file = data.get('file') as Blob;

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const pdfData = await pdfParse(buffer);
  const text = pdfData.text;

  return NextResponse.json({ text }, { status: 200 });
}
