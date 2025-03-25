'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import YoutubeEmbed from '../embed';

const useWindowFocus = () => {
  const [isToggle, setToggle] = useState(false);
  const isOnce = useRef(true);

  const onFocus = () => {
    console.log('Tab is in focus');
    setToggle(true);
  };

  const onBlur = () => {
    console.log('Tab is blurred');
    setToggle(false);
  };

  useEffect(() => {
    // **這裡只觸發一次**
    if (isOnce.current) {
      window.addEventListener('focus', onFocus);
      window.addEventListener('blur', onBlur);
      isOnce.current = false;
    }
    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
      isOnce.current = true;
    };
  }, []);
  return isToggle;
};
const CaptureMedia: React.FC = () => {
  const isToggle = useWindowFocus();
  if (isToggle) {
    return <YoutubeEmbed videoId="mRma6NkHwWU" />;
  } else {
    return (
      <div
        style={{
          aspectRatio: '16/9',
          width: '900',
        }}
      >
        <Image
          alt="愛情的大壞蛋"
          fill
          src="https://i.ytimg.com/vi/mRma6NkHwWU/hqdefault.jpg"
        />
      </div>
    );
  }
};

export default CaptureMedia;
