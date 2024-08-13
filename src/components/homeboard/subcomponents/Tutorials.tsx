import React, { FC } from 'react';

interface TutorialsProps {}

const Tutorials: FC<TutorialsProps> = ({}) => {
  return (
    <div className="bg-gray-200 p-5 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
      <p className="mb-4">
        Explore our detailed guides and tutorials to make the most of our app.
      </p>
      <ul className="list-disc list-inside">
        <li className="mb-2">
          <a href="/guide/receipts" className="text-blue-600 hover:underline">
            How to Scan and Manage Receipts
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/guide/pdf-summary"
            className="text-blue-600 hover:underline"
          >
            Summarizing PDFs: A Step-by-Step Guide
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/guide/image-analysis"
            className="text-blue-600 hover:underline"
          >
            Image Analysis: Identifying and Categorizing Items
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tutorials;
