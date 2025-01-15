import { PropsWithChildren } from 'react';

import MoonIcon from '@/assets/icons/moon.svg';
import SunIcon from '@/assets/icons/sun.svg';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <label className="btn btn-ghost swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="dark" />
            <SunIcon className="swap-off h-6 w-6 fill-current" />
            <MoonIcon className="swap-on h-6 w-6 fill-current" />
          </label>
        </div>
      </div>
      <div className="container px-6 py-16 mx-auto min-h-screen">
        {children}
      </div>
    </>
  );
};

export default MainLayout;
