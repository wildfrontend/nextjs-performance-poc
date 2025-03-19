import DefaultSlider from '@/components/swiper/default';

const Page: React.FC = () => {
  return (
    <div
      style={{
        width: '1200px',
        margin: '0 auto',
      }}
    >
      <DefaultSlider />
      <pre>預設進入頁面會autoplay,LCP時間會很長</pre>
    </div>
  );
};

export default Page;
