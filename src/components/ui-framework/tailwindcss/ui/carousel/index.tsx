import React from 'react';

import BasicCarousel from './basic';
import IndicatorCarousel from './indicator';

const CarouselExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <BasicCarousel />
      <IndicatorCarousel />
    </div>
  );
};

export default CarouselExample;
