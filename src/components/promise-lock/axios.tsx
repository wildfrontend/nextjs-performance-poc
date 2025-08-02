'use client';

import useDummyjsonInterceptor from "@/hooks/auth/dummyjson";


const AxiosInterceptor: React.FC = () => {
  useDummyjsonInterceptor();
  return <></>;
};

export default AxiosInterceptor;
