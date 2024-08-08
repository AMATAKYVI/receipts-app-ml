import { NextRequest, NextResponse } from 'next/server';
import formidable from 'formidable';
import sharp from 'sharp';
import { Readable } from 'stream';
import { promisify } from 'util';
import fs from 'fs';
import { IncomingMessage } from 'http';

// Disable body parsing to handle file uploads manually
export const config = {
  api: {
    bodyParser: false,
  },
};

// Promisify fs.readFile to use async/await
const readFileAsync = promisify(fs.readFile);

const preprocessImage = async (fileBuffer: Buffer) => {
  return sharp(fileBuffer).resize(1000).grayscale().threshold(128).toBuffer();
};

// Helper function to convert NextRequest body to a stream
function requestToStream(req: NextRequest): Readable {
  return Readable.from((req.body as unknown as Iterable<any>) || []);
}

// POST handler for file upload
export async function POST(req: NextRequest) {
  const form = formidable({ keepExtensions: true });

  try {
    const formData = await new Promise<{
      fields: formidable.Fields;
      files: formidable.Files;
    }>((resolve, reject) => {
      const stream = requestToStream(req);
      form.parse(stream as unknown as IncomingMessage, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const file = formData.files.file as unknown as formidable.File;

    if (!file || Array.isArray(file)) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const fileBuffer = await readFileAsync(file.filepath);
    const processedImage = await preprocessImage(fileBuffer);

    return new NextResponse(processedImage, {
      status: 201,
      headers: { 'Content-Type': 'image/png' },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Image processing failed' },
      { status: 500 }
    );
  }
}
