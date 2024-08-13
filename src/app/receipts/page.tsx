import ReceiptsBoard from '@/components/receiptsboard/ReceiptsBoard';
import Sidebar from '@/components/sidebar/Sidebar';
import React, { FC } from 'react';

interface ReceiptsProps {}

const Receipts: FC<ReceiptsProps> = ({}) => {
  return (
    <div className="block sm:flex">
      <Sidebar />
      <ReceiptsBoard />
    </div>
  );
};

export default Receipts;
