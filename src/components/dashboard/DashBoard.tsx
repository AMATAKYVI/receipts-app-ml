import React, { FC } from 'react';
import InputReceipt from '../inputreceipt/InputReceipt';
import InputPdf from '../inputpdf/InputPdf';
import InputImage from '../inputimage/InputImage';
// import InputImage from '../inputImage/InputImage';

interface DashBoardProps {}

const DashBoard: FC<DashBoardProps> = ({}) => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold">Receipt Scanner</h1>
      <h1>Dashboard</h1>
      <InputReceipt />

      <div className="text-4xl font-semibold">Pdf Scanner</div>
      <InputPdf />

      <div className="text-4xl font-semibold">Image Detection</div>
      <h1>Coco-ssd model 80 objects</h1>
      <InputImage />
    </div>
  );
};

export default DashBoard;
