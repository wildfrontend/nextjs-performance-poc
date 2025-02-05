import React, { PropsWithChildren } from 'react';

import ReactQueryProvider from '@/components/react-query/provider';
import '@/styles/tailwind.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Layout;
