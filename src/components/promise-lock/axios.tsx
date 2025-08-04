'use client';

import useNextjsInterceptor from '@/hooks/auth/nexts';

const AxiosInterceptor: React.FC = () => {
  useNextjsInterceptor();
  return <></>;
};

export default AxiosInterceptor;
