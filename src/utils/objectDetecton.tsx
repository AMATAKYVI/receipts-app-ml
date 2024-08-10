// // utils/objectDetection.ts
// import * as tf from '@tensorflow/tfjs';
// import * as cocoSsd from '@tensorflow-models/coco-ssd';

// export async function detectObjects(
//   imageElement: HTMLImageElement
// ): Promise<string[]> {
//   // Ensure the WebGL backend is set up
//   if (!tf.getBackend()) {
//     try {
//       await tf.setBackend('webgl');
//       await tf.ready();
//     } catch (error) {
//       console.error('Failed to set WebGL backend:', error);
//       await tf.setBackend('cpu');
//       await tf.ready();
//     }
//   }

//   // Load the model
//   const model = await cocoSsd.load();

//   // Detect objects in the image
//   const predictions = await model.detect(imageElement);

//   // Extract the detected objects
//   const detectedObjects = predictions.map((prediction) => prediction.class);

//   return detectedObjects;
// }
// utils/objectDetection.ts
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

export async function detectObjects(imageElement: HTMLImageElement) {
  const model = await cocoSsd.load();
  const predictions = await model.detect(imageElement);
  return predictions.map((prediction) => prediction.class);
}
