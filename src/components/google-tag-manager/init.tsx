'use client';

import Script, { ScriptProps } from 'next/script';

if (typeof window !== 'undefined') {
  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(() => {
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
}

const InitGPT: React.FC<{ strategy?: ScriptProps['strategy'] }> = ({
  strategy,
}) => {
  return (
    <>
      <Script
        async
        id="gpt-script"
        strategy={strategy}
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
      />
    </>
  );
};

export default InitGPT;
