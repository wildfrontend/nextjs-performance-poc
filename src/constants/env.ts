export const envCode = process.env.NODE_ENV ?? 'development';

export const isDev = envCode === 'development';

export const appVersion = `${process.env.NPM_PACKAGE_VERSION} - ${envCode}`;

export const envConfig = {
  socketUrl: process.env.SOCKET_URL,
};
