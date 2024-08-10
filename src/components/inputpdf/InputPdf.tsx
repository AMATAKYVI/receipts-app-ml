// app/components/InputPdf.tsx
'use client';

import { extractTextFromPdf } from '@/utils/pdfPreprocessing';
import React, { useState, ChangeEvent } from 'react';
const InputPdf: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [pdfUrl, setPdfUrl] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);

  const handlePdfChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setText('');
    setPdfUrl(undefined);
    setError(null);

    try {
      const file = event.target.files?.[0];
      if (!file) return;

      const extractedText = await extractTextFromPdf(file);
      setText(extractedText);

      // Set a preview URL for the PDF
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    } catch (error) {
      console.error(error);
      setError('An error occurred while processing the PDF.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <label htmlFor="insert-pdf">
        <input
          type="file"
          id="insert-pdf"
          accept=".pdf"
          onChange={handlePdfChange}
          aria-label="Upload PDF file"
        />
      </label>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {pdfUrl && !loading && (
        <iframe
          src={pdfUrl}
          className="w-[300px] h-[400px]"
          title="Uploaded PDF Preview"
          aria-label="PDF Preview"
        />
      )}
      <div className="mt-4">
        <h3>Extracted Text:</h3>
        <textarea
          value={text}
          readOnly
          rows={10}
          className="w-full border border-gray-300 p-2 mt-2"
          aria-label="Extracted text from PDF"
        />
      </div>
    </div>
  );
};

export default InputPdf;
