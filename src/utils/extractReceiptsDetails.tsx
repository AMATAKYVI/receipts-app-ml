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
// export const extractReceiptDetails = (text: string): ReceiptDetails => {
//   const details: ReceiptDetails = {
//     storeName: '',
//     date: '',
//     items: [],
//     totalCost: '',
//   };

//   //   const lines = text.split('\n');
//   //   const lines = preprocessText(text).split(/(?<=\d{2}\.\d{2})\s+/);
//   const lines = preprocessText(text);

//   const storeNamePattern = /(Walmart|Target|Costco|OtherStores...)/i;
//   const datePattern = /(\d{1,2}\/\d{1,2}\/\d{2,4})/;
//   const totalCostPattern = /(?<!SUB)TOTAL\s+(\d+\.\d{2})/i;
//   const itemPattern = /([\w\s\-]+?)\s+(\d+\.\d{2})\s+X/i;

//   for (const line of lines) {
//     // Find store name
//     if (!details.storeName && storeNamePattern.test(line)) {
//       const match = line.match(storeNamePattern);
//       details.storeName = match ? match[0] : '';
//     }
//     // Find date
//     if (!details.date && datePattern.test(line)) {
//       const match = line.match(datePattern);
//       details.date = match ? match[0] : '';
//     }
//     // Find total cost
//     if (totalCostPattern.test(line)) {
//       const cleanLine = line.replace(/\s+/g, ' ').trim();
//       const match = cleanLine.match(totalCostPattern);
//       if (match && match[1]) {
//         details.totalCost = match[1];
//       }
//     }
//     // Find items
//     const itemMatch = line.match(itemPattern);
//     if (itemMatch) {
//       const [_, name, price] = itemMatch;
//       if (name && price) {
//         details.items.push(name.trim());
//       }
//     }
//   }

//   return details;
// };

export const extractReceiptDetails = (text: string): ReceiptDetails => {
  const details: ReceiptDetails = {
    storeName: '',
    date: '',
    items: [],
    totalCost: '',
  };

  // Preprocess text
  const processedText = preprocessText(text);

  // Improved regex patterns
  const storeNamePattern = /(Walmart|Target|Costco|OtherStores...)/i;
  const datePattern = /(\d{1,2}\/\d{1,2}\/\d{2,4})/;
  const totalCostPattern = /(?<!SUB)TOTAL\s+(\d+\.\d{2})/i;
  const itemPattern = /([\w\s\-]+?)\s+(\d+\.\d{2})\s+X/g;

  // Find store name
  if (!details.storeName && storeNamePattern.test(processedText)) {
    const match = processedText.match(storeNamePattern);
    details.storeName = match ? match[0] : '';
  }

  // Find date
  if (!details.date && datePattern.test(processedText)) {
    const match = processedText.match(datePattern);
    details.date = match ? match[0] : '';
  }

  // Find total cost
  if (totalCostPattern.test(processedText)) {
    const match = processedText.match(totalCostPattern);
    if (match && match[1]) {
      details.totalCost = match[1];
    }
  }

  // Find items
  let match;
  while ((match = itemPattern.exec(processedText)) !== null) {
    const [_, name, price] = match;
    if (name && price) {
      details.items.push(name.trim());
    }
  }

  return details;
};
