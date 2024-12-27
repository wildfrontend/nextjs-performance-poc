'use client';

import Image from 'next/image';
import { ComponentProps } from 'react';

const GosuImage: React.FC<ComponentProps<typeof Image>> = ({ ...props }) => {
  return (
    <Image
      loader={({ src, width }) => {
        return `${src}?w=${width}`;
      }}
      {...props}
    />
  );
};

export default GosuImage;
