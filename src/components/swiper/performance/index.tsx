'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import type { AutoplayOptions } from 'swiper/types';

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
      navigation={mount}
      loop
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperControl enableAutoPlay={mount} />
      <SwiperSlide>
        <Image
          width={1600}
          height={900}
          src={
            'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA'
          }
          alt="1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={1600}
          height={900}
          src={
            'https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU'
          }
          alt="2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          width={1600}
          height={900}
          src={
            'https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g'
          }
          alt="3"
        />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <Image
          width={1600}
          height={900}
          src={
            'https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI'
          }
          alt="4"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default PerformanceSlider;
