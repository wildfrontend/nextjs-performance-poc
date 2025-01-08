import Script from 'next/script';

import DefineAdSlot from '@/components/google-tag-manager/slot';
import adSlotStyles from '@/styles/adslot.module.css';

const slots: { adUnit: string; size: googletag.GeneralSize; divId: string }[] =
  [
    {
      divId: 'Paris',
      adUnit: '/6355419/Travel/Europe/France/Paris',
      size: [300, 250],
    },
  ];

export default function Page() {
  console.log('partytown');
  return (
    <div>
      <Script
        async
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
      />
      <section className={adSlotStyles.centered}>
        {slots.map((slot, i) => (
          <DefineAdSlot
            adUnit={slot.adUnit}
            size={slot.size}
            key={i}
            divId={slot.divId}
          />
        ))}
      </section>
    </div>
  );
}
