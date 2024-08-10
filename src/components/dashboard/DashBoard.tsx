import React, { FC } from 'react';
import InputImage from '../inputimage/InputImage';
import InputPdf from '../inputpdf/InputPdf';

interface DashBoardProps {}

const DashBoard: FC<DashBoardProps> = ({}) => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold">Receipt Scanner</h1>
      <h1>Dashboard</h1>
      <InputImage />

      <div className="text-4xl font-semibold">Pdf Scanner</div>
      <InputPdf />
    </div>
  );
};

export default DashBoard;
