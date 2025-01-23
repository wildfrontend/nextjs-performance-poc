'use client';

import dynamic from 'next/dynamic';

import GosuImage from '@/components/images/gosu-image';
import articles from '@/mocks/articles';
import adSlotStyles from '@/styles/adslot.module.css';
import imageSizes from '@/utils/image-size';

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
const item = articles[0];

export default function Page() {
  console.log('lazy-load');
  return (
    <div>
      <InitGPT strategy="lazyOnload" />
      <section className={adSlotStyles.centered}>
        {slots.map((slot, i) => (
          <DefineAdSlot
            adUnit={slot.adUnit}
            divId={slot.divId}
            key={i}
            size={slot.size}
          />
        ))}
      </section>
      <div
        key={item.id}
        style={{
          position: 'relative',
          width: '100%',
          height: '270px',
        }}
      >
        <GosuImage
          alt={item.headlineImageText}
          fetchPriority="high"
          fill
          loading="eager"
          sizes={imageSizes('375px', '600px', '400px')}
          src={item.headlineImagePath}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
