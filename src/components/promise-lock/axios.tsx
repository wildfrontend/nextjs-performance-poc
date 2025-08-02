'use client';

import useDummyjsonInterceptor from "@/hooks/auth/dummyjson";
import useNextjsInterceptor from "@/hooks/auth/nexts";


const AxiosInterceptor: React.FC = () => {
  useDummyjsonInterceptor();
  useNextjsInterceptor();
  return <></>;
};

export default AxiosInterceptor;
