'use client';

import { useEffect } from 'react';

import adSlotStyles from '@/styles/adslot.module.css';

const adSlots: Record<string, googletag.Slot> = {};

const DefineAdSlot: React.FC<{
  adUnit: string;
  size: googletag.GeneralSize;
  divId: string;
}> = ({ adUnit, size, divId }) => {
  useEffect(() => {
    console.log({ googletag });
    if (window.googletag) {
      // Register the slot with GPT when the component is loaded.
      window.googletag.cmd.push(() => {
        const slot = googletag.defineSlot(adUnit, size, divId);
        if (slot) {
          slot.addService(googletag.pubads());
          googletag.display(slot);
          adSlots[divId] = slot;
        }
      });
      // Clean up the slot when the component is unloaded.
      return () => {
        window.googletag.cmd.push(() => {
          if (adSlots[divId]) {
            googletag.destroySlots([adSlots[divId]]);
            delete adSlots[divId];
          }
        });
      };
    }
  }, [adUnit, divId, size]);

  // Create the ad slot container.
  return (
    <div
      className={`${adSlotStyles.adSlot} ${adSlotStyles.centered}`}
      id={divId}
      style={{ width: '300px', height: '250px' }}
    ></div>
  );
};

export default DefineAdSlot;
