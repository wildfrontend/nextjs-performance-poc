import Image from 'next/image';
import React from 'react';

const SideImageCard: React.FC = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <Image
          alt="Movie"
          className="w-full h-auto" // Ensure the image scales properly
          height={300} // Maintain the correct aspect ratio
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          unoptimized
          width={400} // Adjust as needed for your layout
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default SideImageCard;
