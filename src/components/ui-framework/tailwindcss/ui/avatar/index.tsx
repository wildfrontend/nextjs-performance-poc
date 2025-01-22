import React from 'react';

const AvatarExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="avatar">
          <div className="w-32 rounded">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-20 rounded">
            <img
              alt="Tailwind-CSS-Avatar-component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-16 rounded">
            <img
              alt="Tailwind-CSS-Avatar-component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="avatar">
          <div className="w-8 rounded">
            <img
              alt="Tailwind-CSS-Avatar-component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="avatar">
          <div className="mask mask-squircle w-24">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="mask mask-hexagon w-24">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="mask mask-triangle w-24">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <div className="avatar-group -space-x-6 rtl:space-x-reverse">
        <div className="avatar">
          <div className="w-12">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-12">
            <span>+99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarExample;
