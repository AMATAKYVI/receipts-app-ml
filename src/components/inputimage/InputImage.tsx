'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useRef } from 'react';
// import * as cocoSsd from '@tensorflow-models/coco-ssd';
import Tesseract from 'tesseract.js';
// import '@tensorflow/tfjs';
function InputImage() {
  const [predictions, setPredictions] = useState([]);
  const imageRef = useRef(null);
  const [text, setText] = useState('');

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    Tesseract.recognize(file, 'eng', {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        //   let words = text.split(/\s+/); // Split text into words
        // words = words.filter(word => dictionary.includes(word)); // Keep only valid words
        // const validText = words.join(' ');

        // setText(validText); let words = text.split(/\s+/); // Split text into words
        // words = words.filter(word => dictionary.includes(word)); // Keep only valid words
        // const validText = words.join(' ');

        // setText(validText);

        let validText = text.replace(/[^a-zA-Z0-9\s.,-]/g, '');

        validText = validText.replace(/\b0\b/g, 'O').replace(/\b1\b/g, 'I');

        setText(validText);
      })
      .catch((err) => console.error('Error recognizing text:', err));
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

      <Image src={`${imageRef}`} alt="Uploaded receipt" />

      <div>{text}</div>
    </div>
  );
}
const dictionary = ['Walmart', 'Target', 'Receipt', 'Total', 'Amount']; // Add relevant words

export default InputImage;
