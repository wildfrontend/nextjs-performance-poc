import DefaultSlider from "@/components/swiper/default";

const Page: React.FC = () => {
  return (
    <div>
      <DefaultSlider />
      <pre>
        預設進入頁面會autoplay,LCP時間會很長
      </pre>
    </div>
  );
};

export default Page 