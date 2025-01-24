import React, { PropsWithChildren } from 'react';

import ReactQueryProvider from '@/components/react-query/provider';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Layout;
