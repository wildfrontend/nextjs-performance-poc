export type LoginNextjsApiRequest = {
  username: string;
  password: string;
};

export type LoginNextjsApiResponse = {
  accessToken: string;
  refreshToken: string;
};

export type RefreshNextjsTokenRequest = {
  refreshToken: string;
};

export type RefreshNextjsTokenResponse = {
  accessToken: string;
  refreshToken: string;
};
