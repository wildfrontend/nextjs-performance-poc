import Image from 'next/image';
import React from 'react';

const BasicCarousel: React.FC = () => {
  return (
    <div className="carousel rounded-box">
      <div className="carousel-item">
        <Image
          alt="Burger"
          className="w-full h-auto"
          height={200} // Adjust based on the layout
          src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
          unoptimized
          width={200} // Adjust as needed
        />
      </div>
      <div className="carousel-item">
        <Image
          alt="Burger"
          className="w-full h-auto"
          height={200}
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          unoptimized
          width={200}
        />
      </div>
      <div className="carousel-item">
        <Image
          alt="Burger"
          className="w-full h-auto"
          height={200}
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          unoptimized
          width={200}
        />
      </div>
      <div className="carousel-item">
        <Image
          alt="Burger"
          className="w-full h-auto"
          height={200}
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          unoptimized
          width={200}
        />
      </div>
      <div className="carousel-item">
        <Image
          alt="Burger"
          className="w-full h-auto"
          height={200}
          src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
          unoptimized
          width={200}
        />
      </div>
      <div className="carousel-item">
        <Image
          alt="Burger"
          className="w-full h-auto"
          height={200}
          src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
          unoptimized
          width={200}
        />
      </div>
      <div className="carousel-item">
        <Image
          alt="Burger"
          className="w-full h-auto"
          height={200}
          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
          unoptimized
          width={200}
        />
      </div>
    </div>
  );
};

export default BasicCarousel;
