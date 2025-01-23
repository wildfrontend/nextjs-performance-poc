import Image from 'next/image';
import React from 'react';

const AvatarExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="avatar">
        <div className="w-24 rounded relative">
          <Image
            alt="1534528741775"
            fill
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            unoptimized
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-32 rounded relative">
            <Image
              alt="1534528741775"
              fill
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              unoptimized
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-20 h-20 rounded relative">
            <Image
              alt="Tailwind-CSS-Avatar-component"
              fill
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              unoptimized
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-16 h-16 rounded relative">
            <Image
              alt="Tailwind-CSS-Avatar-component"
              fill
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              unoptimized
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-8 h-8 rounded relative">
            <Image
              alt="Tailwind-CSS-Avatar-component"
              fill
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="avatar">
          <div className="mask mask-squircle w-24 h-24 relative">
            <Image
              alt="Tailwind-CSS-Avatar-component"
              fill
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              unoptimized
            />
          </div>
        </div>
        <div className="avatar">
          <div className="mask mask-hexagon w-24 h-24 relative">
            <Image
              alt="Hexagon mask image"
              fill
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              unoptimized
            />
          </div>
        </div>
        <div className="avatar">
          <div className="mask mask-triangle w-24 h-24 relative">
            <Image
              alt="Triangle mask image"
              fill
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              unoptimized
            />
          </div>
        </div>
      </div>
      <div className="avatar-group -space-x-6 rtl:space-x-reverse">
        <div className="avatar">
          <div className="w-12">
            <Image
              alt="Avatar 1"
              className="w-12"
              height={48}
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              width={48} // Adjust to match w-12 (48px)
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12 relative">
            <Image
              alt="Avatar 2"
              fill
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              unoptimized
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12 relative">
            <Image
              alt="Avatar 3"
              fill
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarExample;
