import Image from 'next/image';
import React from 'react';

const BasicCard: React.FC = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image
          alt="Shoes"
          className="w-full h-auto" // Ensure it fills the figure
          height={216} // Adjust based on image aspect ratio
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          unoptimized
          width={384} // Adjust to match `w-96` (384px)
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
