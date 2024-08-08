import formidable from 'formidable';
import { NextRequest, NextResponse } from 'next/server';
import { ImageAnnotatorClient } from '@google-cloud/vision';

export const config = {
  api: {
    bodyParser: false,
  },
};

const client = new ImageAnnotatorClient({
  keyFilename: '',
});

export default async function handler(
  req: NextRequest,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { text: string }): void; new (): any };
    };
  }
) {
  if (req.method === 'POST') {
    const { imageUrl } = req.body as unknown as { imageUrl: string };

    const [result] = await client.textDetection(imageUrl);
    const detections = result?.textAnnotations;
    const description = detections?.[0]?.description;
    res.status(200).json({ text: `${description ?? ''}` } as { text: string });
  }
}
