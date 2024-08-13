import React, { FC } from 'react';

interface UserTipsProps {}

const UserTips: FC<UserTipsProps> = ({}) => {
  return (
    <div className="bg-gray-100 p-5 rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-4">Tips & Tricks</h2>
      <ul className="list-disc list-inside">
        <li className="mb-2">
          Use the &quot;Scan Receipt&quot; button to quickly upload and analyze
          new receipts.
        </li>
        <li className="mb-2">
          Click on a receipt to view detailed information and spend analytics.
        </li>
        <li className="mb-2">
          Upload PDFs to get summarized insights and key information at a
          glance.
        </li>
        <li className="mb-2">
          Analyze images to identify and categorize items for better
          record-keeping.
        </li>
      </ul>
    </div>
  );
};

export default UserTips;
