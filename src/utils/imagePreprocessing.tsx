export const preprocessImage = async (
  file: File
): Promise<HTMLImageElement> => {
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
