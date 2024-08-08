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

interface ReceiptDetails {
  storeName: string;
  date: string;
  items: string[];
  totalCost: string;
}

function InputImage() {
  const imageRef = useRef<string | undefined>();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState<ReceiptDetails>({
    storeName: '',
    date: '',
    items: [],
    totalCost: '',
  });
  const handleImageChange = (event: any) => {
    setLoading(true);
    setText('');
    setReceiptDetails(() => {
      return {
        storeName: '',
        date: '',
        items: [],
        totalCost: '',
      };
    });
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const imageUrl = URL.createObjectURL(file);
    imageRef.current = imageUrl;

    Tesseract.recognize(file, 'eng', {
      logger: (m) => {
        // console.log(m);
      },
    })
      .then(({ data: { text } }) => {
        let doc = nlp(text);
        doc = doc.normalize() as Three;
        const validText = doc.text();

        //extract receipts
        const details = extractReceiptDetails(validText);
        setReceiptDetails(details);
        setText(validText);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  const extractReceiptDetails = (text: string): ReceiptDetails => {
    const details: ReceiptDetails = {
      storeName: '',
      date: '',
      items: [],
      totalCost: '',
    };

    const lines = text.split('\n');

    // need to extend this logic
    const storeNamePattern = /(Walmart|Target|Costco|OtherStores...)/i;
    const datePattern = /(\d{1,2}\/\d{1,2}\/\d{2,4})/;
    const totalCostPattern = /(?<!SUB)TOTAL\s+(\d+\.\d{2})/i;
    const itemPattern = /^[A-Za-z\s]+\s+\d+\.\d{2}$/;

    for (let line of lines) {
      // Find store name
      if (!details.storeName && storeNamePattern.test(line)) {
        const match = line.match(storeNamePattern);
        details.storeName = match ? match[0] : '';
      }
      // Find date
      if (!details.date && datePattern.test(line)) {
        const match = line.match(datePattern);
        details.date = match ? match[0] : '';
      }
      // Find total cost
      if (totalCostPattern.test(line)) {
        const cleanLine = line.replace(/\s+/g, ' ').trim();

        const match = cleanLine.match(totalCostPattern);
        if (match && match[1]) {
          details.totalCost = match[1];
        }
      }
      // Find items
      if (itemPattern.test(line)) {
        details.items.push(line.trim());
      }
    }

    return details;
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
      {/* <div>Extracted Text: {text}</div> */}
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
        <ul>
          {receiptDetails.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>{' '}
    </div>
  );
}
const dictionary = ['Walmart', 'Target', 'Receipt', 'Total', 'Amount']; // Add relevant words

export default InputImage;
