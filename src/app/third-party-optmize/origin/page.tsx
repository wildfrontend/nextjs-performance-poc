import InitGPT from '@/components/google-tag-manager/init';
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
    </div>
  );
}
