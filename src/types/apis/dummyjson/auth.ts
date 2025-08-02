export type RefreshTokenRequest = {
  refreshToken?: string;
  expiresInMins?: number;
};

export type RefreshTokenResponse = {
  /**
   * The new access token.
   */
  accessToken: string;
  /**
   * The new refresh token.
   */
  refreshToken: string;
};

export type LoginUserRequest = {
  username: string;
  password: string;
  expiresInMins?: number; // default 30 minutes
};

export type LoginUserResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};

export type GetUserResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};

export type GetAuthResourcesResponse = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};
