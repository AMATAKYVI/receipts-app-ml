import Tesseract from 'tesseract.js';

export const extractTextFromImage = async (
  image: HTMLImageElement
): Promise<string> => {
  return new Promise((resolve, reject) => {
    Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        // console.log(m);
      },
    })
      .then(({ data: { text } }) => resolve(text))
      .catch(reject);
  });
};
