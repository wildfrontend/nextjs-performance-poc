import React from 'react';
import BasicModal from './basic';
import CloseOutsideModal from './close-from-outside';
import CloseModal from './close';

const ModalsExample: React.FC = () => {
  return (
    <div className="flex gap-4">
      <BasicModal/>
      <CloseOutsideModal/>
      <CloseModal/>
    </div>
  );
};

export default ModalsExample;
