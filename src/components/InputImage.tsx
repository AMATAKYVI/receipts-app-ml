'use client';
import React, { useState } from 'react';

function InputImage() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    if (!file.type.match('image.*')) {
      alert('Only image files are allowed');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      setImageUrl(e.target.result);
    };
    reader.readAsDataURL(file);
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
      {imageUrl && (
        <div className="">
          <img
            className="w-[50%] h-[100%]"
            src={imageUrl}
            alt="Uploaded Image"
          />
        </div>
      )}
    </div>
  );
}

export default InputImage;
