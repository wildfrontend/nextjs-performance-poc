import React from 'react';

import BasicCard from './basic';
import ResponsiveCard from './responsive';
import SideImageCard from './side-image';

const CardExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <BasicCard />
      <SideImageCard />
      <ResponsiveCard />
    </div>
  );
};

export default CardExample;
