import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import MuiThemeProvider from '@/components/ui-framework/mui/theme';

export const metadata: Metadata = {
  title: '3D Landing Demo',
  description:
    'A demo showcasing a 3D interactive landing page with a rotating Earth background.',
};

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppRouterCacheProvider>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
};

export default Layout;
