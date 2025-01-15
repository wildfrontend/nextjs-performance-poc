import React from 'react';

import BasicDropdown from './basic';
import CardDropdown from './card';

const DropdownExample: React.FC = () => {
  return (
    <div className="flex gap-4">
      <BasicDropdown />
      <CardDropdown />
    </div>
  );
};

export default DropdownExample;
