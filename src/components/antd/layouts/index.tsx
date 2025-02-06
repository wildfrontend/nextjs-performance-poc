'use client';

import {
  ContainerOutlined,
  DashboardOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { Typography } from 'antd';
import 'antd/dist/reset.css';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '0',
    icon: <DashboardOutlined />,
    label: (
      <Link href="/antd">
        <Typography.Text>Home</Typography.Text>
      </Link>
    ),
  },
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: (
      <Link href="/antd/wizard-form">
        <Typography.Text>Wizard Form</Typography.Text>
      </Link>
    ),
  },
  { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
];

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider width="256px">
        <Menu items={items} mode="inline" />
      </Layout.Sider>
      <Layout>
        <Layout.Header></Layout.Header>
        <Layout.Content className="p-4">{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
