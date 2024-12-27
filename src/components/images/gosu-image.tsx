'use client';

import Image from 'next/image';
import { ComponentProps } from 'react';

const gosuCDNDomains = [
  'static.gosugamers.net',
  'static.staging.gosugamers.net',
];

const checkGosuCDN = (src: string) => {
  const url = new URL(src);
  const isGosuCDN = gosuCDNDomains.some((d) => d === url.hostname);
  return isGosuCDN;
};

const GosuImage: React.FC<ComponentProps<typeof Image>> = ({ ...props }) => {
  return (
    <Image
      loader={({ src, width }) => {
        try {
          const isGosuCDN = checkGosuCDN(src);
          if (isGosuCDN) {
            return `${src}?w=${width}`;
          }
          return src;
        } catch (error) {
          console.warn('image not remote url', error);
          return src;
        }
      }}
      {...props}
    />
  );
};

export default GosuImage;
