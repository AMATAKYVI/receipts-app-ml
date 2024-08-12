import Sidebar from '@/components/sidebar/Sidebar';
import React, { FC } from 'react';

interface ScannerPageProps {}

const ScannerPage: FC<ScannerPageProps> = ({}) => {
  return (
    <div className="block sm:flex">
      <Sidebar />
      Scanner
    </div>
  );
};

export default ScannerPage;
