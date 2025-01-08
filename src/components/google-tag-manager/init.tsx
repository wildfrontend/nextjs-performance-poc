'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const InitGPT: React.FC = () => {
  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] };
    googletag.cmd.push(() => {
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    });
  }, []);
  return (
    <>
      <Script
        async
        id="gpt-script"
        strategy="lazyOnload"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
      />
    </>
  );
};

export default InitGPT;
