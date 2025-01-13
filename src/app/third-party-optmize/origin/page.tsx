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
