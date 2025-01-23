import Image from 'next/image';
import React from 'react';

const IndicatorCarousel: React.FC = () => {
  return (
    <>
      <div className="carousel w-full">
        <div className="carousel-item w-full" id="item1">
          <Image
            alt="Carousel Image 1"
            className="w-full"
            height={576} // Adjust based on aspect ratio
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            width={1024} // Adjust based on container width
          />
        </div>
        <div className="carousel-item w-full" id="item2">
          <Image
            alt="Carousel Image 2"
            className="w-full"
            height={576}
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            width={1024}
          />
        </div>
        <div className="carousel-item w-full" id="item3">
          <Image
            alt="Carousel Image 3"
            className="w-full"
            height={576}
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            width={1024}
          />
        </div>
        <div className="carousel-item w-full" id="item4">
          <Image
            alt="Carousel Image 4"
            className="w-full"
            height={576}
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            width={1024}
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

export default IndicatorCarousel;
