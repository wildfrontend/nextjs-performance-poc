'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider } from 'antd';
import React, { PropsWithChildren } from 'react';

import DashboardLayout from '@/components/antd/layouts';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              headerBg: 'white',
              siderBg: 'white',
            },
          },
        }}
      >
        <DashboardLayout>{children}</DashboardLayout>
      </ConfigProvider>
    </AntdRegistry>
  );
};

export default Layout;
