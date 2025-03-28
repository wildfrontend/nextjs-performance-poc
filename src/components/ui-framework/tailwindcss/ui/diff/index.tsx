import React from 'react';

const DiffExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <img
            alt="daisy"
            src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
          />
        </div>
        <div className="diff-item-2">
          <img
            alt="daisy"
            src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
          />
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default DiffExample;
