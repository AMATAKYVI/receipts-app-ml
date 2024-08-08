/* eslint-disable @next/next/no-img-element */
'use client';
import React, {
  useState,
  useRef,
  DetailedHTMLProps,
  ImgHTMLAttributes,
} from 'react';
import Tesseract from 'tesseract.js';
import nlp from 'compromise';
import Three from 'compromise/view/three';

function InputImage() {
  const imageRef = useRef<string | undefined>();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const handleImageChange = (event: any) => {
    setLoading(true);
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    imageRef.current = imageUrl;
    Tesseract.recognize(file, 'eng', {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        let doc = nlp(text);
        doc = doc.normalize() as Three;
        const validText = doc.text();

        setText(validText);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
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
      {!loading && <img src={imageRef.current} alt="Uploaded image" />}
      <div>{text}</div>
    </div>
  );
}
const dictionary = ['Walmart', 'Target', 'Receipt', 'Total', 'Amount']; // Add relevant words

export default InputImage;
