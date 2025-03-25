'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import YoutubeEmbed from '../embed';

const useWindowFocus = () => {
  const [isToggle, setToggle] = useState(false);
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
    console.log('useWindowFocus initialized'); // 可加這行確認 Hook 只執行一次
    if (document.hasFocus()) {
      onFocus(); // 只在第一次執行
    }
    window.addEventListener('focus', onFocus);
    window.addEventListener('blur', onBlur);

    return () => {
      window.removeEventListener('focus', onFocus);
      window.removeEventListener('blur', onBlur);
    };
  }, []);
  return isToggle;
};
const CaptureMedia: React.FC = () => {
  const isToggle = useWindowFocus();
  if (isToggle) {
    return <YoutubeEmbed />;
  } else {
    return (
      <div>
        <Image
          alt="愛情的大壞蛋"
          width={560}
          height={315}
          src="https://i.ytimg.com/vi/mRma6NkHwWU/hqdefault.jpg"
        />
      </div>
    );
  }
};

export default CaptureMedia;
