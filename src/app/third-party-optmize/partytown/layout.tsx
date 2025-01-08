import Script from 'next/script';
import { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="worker"
      />
    </>
  );
};

export default Layout;
