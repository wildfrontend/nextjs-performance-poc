import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { PropsWithChildren } from 'react';

import MuiThemeProvider from '@/components/ui-framework/mui/theme';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Layout;
