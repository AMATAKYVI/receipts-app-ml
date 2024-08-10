import Tesseract from 'tesseract.js';

// leverage tesseract
export const extractTextFromImage = async (
  image: HTMLImageElement
): Promise<string> => {
  return new Promise((resolve, reject) => {
    Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        // console.log(m);
      },
      errorHandler: (err) => {
        console.log(err);
      },
    })
      .then(({ data: { text } }) => resolve(text))
      .catch(reject);
  });
};
