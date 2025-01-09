import InitGPT from '@/components/google-tag-manager/init';
import DefineAdSlot from '@/components/google-tag-manager/slot';
import GosuImage from '@/components/images/gosu-image';
import articles from '@/mocks/articles';
import adSlotStyles from '@/styles/adslot.module.css';
import imageSizes from '@/utils/image-size';

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
  console.log('origin');
  return (
    <div>
      <InitGPT />
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
      <div
        key={item.id}
        style={{
          position: 'relative',
          width: '100%',
          height: '270px',
        }}
      >
        <GosuImage
          fetchPriority="high"
          loading="eager"
          src={item.headlineImagePath}
          fill
          sizes={imageSizes('375px', '600px', '400px')}
          style={{ objectFit: 'cover' }}
          alt={item.headlineImageText}
        />
      </div>
    </div>
  );
}
