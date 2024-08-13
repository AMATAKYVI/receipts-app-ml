import React, { FC } from 'react';

interface ReceiptsBoardProps {}

const ReceiptsBoard: FC<ReceiptsBoardProps> = ({}) => {
  return (
    <div className=" p-5">
      <div>
        <h1 className="text-3xl font-semibold mb-6">Receipts</h1>
        {/* Add content for managing receipts */}
        <p>View and manage your stored receipts.</p>
      </div>
    </div>
  );
};

export default ReceiptsBoard;
