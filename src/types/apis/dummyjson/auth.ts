
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

