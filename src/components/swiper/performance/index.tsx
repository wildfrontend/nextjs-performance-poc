'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import './styles.css';

const SwiperControl: React.FC<{ enableAutoPlay: boolean }> = ({
  enableAutoPlay,
}) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (enableAutoPlay) {
      swiper?.autoplay?.start();
    } else {
      swiper?.autoplay?.stop();
    }
  }, [enableAutoPlay, swiper]);

  return <></>;
};

const PerformanceSlider = () => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    console.log('client mount');
  }, []);
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
      loop
      modules={[Autoplay, Navigation]}
      navigation={mount}
    >
      <SwiperControl enableAutoPlay={mount} />
      <SwiperSlide>
        <Image
          alt="1"
          height={900}
          src={
            'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA'
          }
          width={1600}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="2"
          height={900}
          src={
            'https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU'
          }
          width={1600}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt="3"
          height={900}
          src={
            'https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g'
          }
          width={1600}
        />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <Image
          alt="4"
          height={900}
          src={
            'https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI'
          }
          width={1600}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default PerformanceSlider;
