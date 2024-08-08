'use client';

import React, { useState, useRef, ChangeEvent } from 'react';
import Tesseract from 'tesseract.js';
import nlp from 'compromise';
import Three from 'compromise/view/three';
import { extractReceiptDetails } from '@/utils/extractReceiptsDetails';

interface ReceiptDetails {
  storeName: string;
  date: string;
  items: string[];
  totalCost: string;
}
const preprocessText = (text: string): string => {
  // Normalize multiple spaces and line breaks
  return text.replace(/\s+/g, ' ').replace(/\n+/g, ' ').trim();
};
const preprocessImage = async (file: File): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.src = reader.result as string;
    };

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject('Failed to get canvas context');
        return;
      }

      // Resize the image
      const scaleFactor = 2000 / img.width;
      canvas.width = 2000;
      canvas.height = img.height * scaleFactor;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Apply grayscale and threshold
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        // Convert to grayscale
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // Red
        data[i + 1] = avg; // Green
        data[i + 2] = avg; // Blue
        // Apply threshold
        data[i] = data[i] > 128 ? 255 : 0; // Red
        data[i + 1] = data[i + 1] > 128 ? 255 : 0; // Green
        data[i + 2] = data[i + 2] > 128 ? 255 : 0; // Blue
      }
      ctx.putImageData(imageData, 0, 0);

      canvas.toBlob((blob) => {
        if (blob) {
          const processedImage = new Image();
          processedImage.src = URL.createObjectURL(blob);
          processedImage.onload = () => resolve(processedImage);
          processedImage.onerror = reject;
        } else {
          reject('Failed to create blob');
        }
      }, 'image/png');
    };

    reader.readAsDataURL(file);
  });
};

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

      Tesseract.recognize(processedImage, 'eng', {
        logger: (m) => {
          // console.log(m);
        },
      })
        .then(({ data: { text } }) => {
          let doc = nlp(text);
          doc = doc.normalize() as Three;
          const validText = doc.text();

          // Extract receipt details
          const validTextX = preprocessText(text);
          const details = extractReceiptDetails(validText);
          setReceiptDetails(details);
          setText(validText);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
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
