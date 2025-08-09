import { appVersion, envConfig } from '@/constants/env';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.group(
    '%c🌟 App Environment Variables',
    'color: white; background: #4CAF50; padding: 4px; border-radius: 3px;'
  );
  console.table(envConfig);
  console.groupEnd();
  return (
    <html data-theme="light" lang="en" suppressHydrationWarning>
      <meta content={appVersion} name="version" />
      <body>{children}</body>
    </html>
  );
}
