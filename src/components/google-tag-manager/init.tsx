'use client';

import Script from 'next/script';

// initial
if (typeof window !== 'undefined') {
  // Ensure we can interact with the GPT command array.
  window.googletag = window.googletag || { cmd: [] };

  // Prepare GPT to display ads.
  googletag.cmd.push(() => {
    // Disable initial load, to precisely control when ads are requested.
    // googletag.pubads().disableInitialLoad();

    // Enable SRA and services.
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
}

const InitGPT: React.FC = () => {
  return (
    <>
      <Script
        async
        strategy="lazyOnload"
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
      />

      {/* Inline configuration script */}
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.googletag = window.googletag || { cmd: [] };

            googletag.cmd.push(() => {
              googletag.pubads().enableSingleRequest();
              googletag.enableServices();
            });
          `,
        }}
      />
    </>
  );
};

export default InitGPT;
