import React from 'react';

import BasicModal from './basic';
import CloseModal from './close';
import CloseOutsideModal from './close-from-outside';

const ModalsExample: React.FC = () => {
  return (
    <div className="flex gap-4">
      <BasicModal />
      <CloseOutsideModal />
      <CloseModal />
    </div>
  );
};

export default ModalsExample;
