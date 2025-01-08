'use client';

import { useEffect } from 'react';

import adSlotStyles from '@/styles/adslot.module.css';

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

const adSlots: Record<string, googletag.Slot> = {};

const DefineAdSlot: React.FC<{
  adUnit: string;
  size: googletag.GeneralSize;
  divId: string;
}> = ({ adUnit, size, divId }) => {
  useEffect(() => {
    // Register the slot with GPT when the component is loaded.
    googletag.cmd.push(() => {
      const slot = googletag.defineSlot(adUnit, size, divId);
      if (slot) {
        slot.addService(googletag.pubads());
        googletag.display(slot);
        adSlots[divId] = slot;
      }
    });

    // Clean up the slot when the component is unloaded.
    return () => {
      googletag.cmd.push(() => {
        if (adSlots[divId]) {
          googletag.destroySlots([adSlots[divId]]);
          delete adSlots[divId];
        }
      });
    };
  }, [adUnit, divId, size]);

  // Create the ad slot container.
  return (
    <div
      className={`${adSlotStyles.adSlot} ${adSlotStyles.centered}`}
      style={{ width: '300px', height: '250px' }}
      id={divId}
    ></div>
  );
};

export default DefineAdSlot;
