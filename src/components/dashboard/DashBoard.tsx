import React, { FC } from 'react';
import InputReceipt from '../inputreceipt/InputReceipt';
import InputPdf from '../inputpdf/InputPdf';
import InputImage from '../inputimage/InputImage';
import Sidebar from '../sidebar/Sidebar';
import MainBoard from '../sideboard/MainBoard';
// import InputImage from '../inputImage/InputImage';

interface DashBoardProps {}

const DashBoard: FC<DashBoardProps> = ({}) => {
  return (
    <div className=" block sm:flex">
      <Sidebar />
      <MainBoard />
    </div>
  );
};

export default DashBoard;
