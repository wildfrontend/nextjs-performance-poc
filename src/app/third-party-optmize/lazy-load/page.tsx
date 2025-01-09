'use client';

import dynamic from 'next/dynamic';

import adSlotStyles from '@/styles/adslot.module.css';

const InitGPT = dynamic(() => import('@/components/google-tag-manager/init'), {
  ssr: false,
});

const DefineAdSlot = dynamic(
  () => import('@/components/google-tag-manager/slot'),
  {
    ssr: false,
  }
);

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
      <InitGPT strategy="lazyOnload" />
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
