import React, { FC } from 'react';

interface ScannerBoardProps {}

const ScannerBoard: FC<ScannerBoardProps> = ({}) => {
  return (
    <div className=" p-5">
      <div>
        <h1 className="text-3xl font-semibold mb-6">Receipt Scanner</h1>
        {/* Add content for receipt scanning */}
        <p>Upload or scan your receipts here.</p>
      </div>
    </div>
  );
};

export default ScannerBoard;
