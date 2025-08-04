'use client';

import useNextjs2Interceptor from '@/hooks/auth/nextjs2';
import useNextjsInterceptor from '@/hooks/auth/nexts';

const AxiosInterceptor: React.FC = () => {
  useNextjsInterceptor();
  useNextjs2Interceptor();
  return <></>;
};

export default AxiosInterceptor;
