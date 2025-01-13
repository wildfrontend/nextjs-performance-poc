import React, { PropsWithChildren } from 'react';

const ImgListItem: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        paddingBottom: '16px',
      }}
    >
      {children}
    </div>
  );
};

export default ImgListItem;
