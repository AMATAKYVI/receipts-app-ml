'use client';

import React, { useState, ChangeEvent } from 'react';
import { extractReceiptDetails } from '@/utils/extractReceiptsDetails';
import { ReceiptDetails } from '@/types/ReceiptDetails';
import { preprocessImage } from '@/utils/imagePreprocessing';
import { extractTextFromImage } from '@/utils/ocr';

const InputImage: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [receiptDetails, setReceiptDetails] = useState<ReceiptDetails>({
    storeName: '',
    date: '',
    items: [],
    totalCost: '',
  });
  const [imageUrl, setImageUrl] = useState<string | undefined>();

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setText('');
    setReceiptDetails({
      storeName: '',
      date: '',
      items: [],
      totalCost: '',
    });

    try {
      const file = event.target.files?.[0];
      if (!file) return;

      const processedImage = await preprocessImage(file);
      setImageUrl(processedImage.src);

      const text = await extractTextFromImage(processedImage);
      const details = extractReceiptDetails(text);
      setReceiptDetails(details);
      setText(text);
    } catch (error) {
      console.error(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <label htmlFor="insert-image">
        <input
          type="file"
          id="insert-image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      {loading && <div>Loading...</div>}
      {imageUrl && !loading && (
        <img
          src={imageUrl}
          className="w-[300px] h-[400px] object-contain"
          alt="Uploaded image"
        />
      )}
      <div>Extracted Text: {text}</div>
      <div>
        <h3>Receipt Details:</h3>
        <p>
          <strong>Store Name:</strong> {receiptDetails.storeName}
        </p>
        <p>
          <strong>Date:</strong> {receiptDetails.date}
        </p>
        <p>
          <strong>Total Cost:</strong> {receiptDetails.totalCost}
        </p>
        <h4>Items:</h4>
        <div className="">{receiptDetails.items.length}</div>
        <ul>
          {receiptDetails.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputImage;
