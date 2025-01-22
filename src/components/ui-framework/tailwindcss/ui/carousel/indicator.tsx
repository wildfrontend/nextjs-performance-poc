import React from 'react';

const IndicatorCarousel: React.FC = () => {
  return (
    <>
      <div className="carousel w-full">
        <div className="carousel-item w-full" id="item1">
          <img
            className="w-full"
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          />
        </div>
        <div className="carousel-item w-full" id="item2">
          <img
            className="w-full"
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          />
        </div>
        <div className="carousel-item w-full" id="item3">
          <img
            className="w-full"
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          />
        </div>
        <div className="carousel-item w-full" id="item4">
          <img
            className="w-full"
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a className="btn btn-xs" href="#item1">
          1
        </a>
        <a className="btn btn-xs" href="#item2">
          2
        </a>
        <a className="btn btn-xs" href="#item3">
          3
        </a>
        <a className="btn btn-xs" href="#item4">
          4
        </a>
      </div>
    </>
  );
};

export default IndicatorCarousel