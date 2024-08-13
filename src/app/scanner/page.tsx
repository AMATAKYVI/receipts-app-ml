import Sidebar from '@/components/sidebar/Sidebar';
import React, { FC } from 'react';
import ScannerBoard from '../../components/scannerboard/ScannerBoard';

interface ScannerPageProps {}

const ScannerPage: FC<ScannerPageProps> = ({}) => {
  return (
    <div className="block sm:flex">
      <Sidebar />
      <ScannerBoard />
    </div>
  );
};

export default ScannerPage;
