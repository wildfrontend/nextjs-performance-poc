import PerformanceSlider from '@/components/swiper/performance';

const Page: React.FC = () => {
  return (
    <div
      style={{
        width: '1200px',
        margin: '0 auto',
      }}
    >
      <PerformanceSlider />
      <pre>
        進頁面後透過setTimeout,用任務駐列 延遲autoplay開啟，可以先取得LCP
        靜態資料 後面再啟動互動功能
      </pre>
    </div>
  );
};

export default Page;
