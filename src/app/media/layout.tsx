import { PropsWithChildren } from 'react';

import '@/styles/tailwind.css';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
