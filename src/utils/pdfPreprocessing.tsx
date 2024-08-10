// utils/pdfTextExtractor.ts
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import pdfjsWorker from 'pdfjs-dist/legacy/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export async function extractTextFromPdf(file: File): Promise<string> {
  // read array buffer text from user frontend
  const arrayBuffer = await file.arrayBuffer();
  // leverage the package get document from the buffer
  const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) })
    .promise;
  let extractedText = '';
  // read base on page count 1 - 2 - 3 etc...
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item: any) => item.str).join(' ');
    // append
    extractedText += pageText + '\n';
  }
  //return complete text to user
  return extractedText;
}
