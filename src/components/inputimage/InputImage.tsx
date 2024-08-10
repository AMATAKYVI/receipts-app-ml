'use client';

import { detectObjects } from '@/utils/objectDetecton';
import React, { FC, ChangeEvent, useState } from 'react';
interface InputImageProps {}

const InputImage: FC<InputImageProps> = ({}) => {
  const [detectedObjects, setDetectedObjects] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setDetectedObjects([]);
    setImageUrl(null);
    setError(null);

    try {
      const file = event.target.files?.[0];
      if (!file) return;

      const url = URL.createObjectURL(file);
      setImageUrl(url);

      // Load the image
      const image = new Image();
      image.src = url;
      image.onload = async () => {
        // Detect objects in the image
        const detectedObjects = await detectObjects(image);
        setDetectedObjects(detectedObjects);
      };
    } catch (error) {
      console.error(error);
      setError('An error occurred while processing the image.');
    } finally {
      setLoading(false);
    }
  };
  console.log(detectedObjects);
  return (
    <div className="">
      <label htmlFor="upload-image">
        <input
          type="file"
          id="upload-image"
          accept="image/*"
          onChange={handleImageChange}
          aria-label="Upload Image"
        />
      </label>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {imageUrl && !loading && (
        <div>
          <img src={imageUrl} alt="Uploaded" className="w-[300px] h-[400px]" />
          <div className="mt-4">
            <h3>Detected Objects:</h3>
            <ul>
              {detectedObjects.map((object, index) => (
                <li key={index}>{object}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputImage;
