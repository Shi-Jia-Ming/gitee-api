import { TokenResponse } from "../interface/token.response";

/**
 * token information
 *
 * @author: Shi-Jia-Ming
 */
export default class TokenInfo {
  /**
   * access token
   */
  public accessToken?: string;
  /**
   * refresh token
   */
  public refreshToken?: string;
  /**
   * createdAt
   */
  public createdAt?: Date;
  /**
   * updatedAt
   */
  public updatedAt?: Date;

  /**
   * constructor
   *
   * @param accessToken   access token
   * @param refreshToken  refresh token
   * @param createdAt     createdAt
   * @param updatedAt     updatedAt
   */
  constructor(accessToken: string, refreshToken: string, createdAt: Date, updatedAt: Date);
  // tslint:disable-next-line:unified-signatures
  constructor(tokenResponse: TokenResponse);
  constructor();
  
  constructor(accessTokenOrTokenResponse?: string | TokenResponse, refreshToken?: string, createdAt?: Date, updatedAt?: Date) {
    if (typeof accessTokenOrTokenResponse === "string") {
      // realize of the first overload
      this.accessToken = accessTokenOrTokenResponse;
      this.refreshToken = refreshToken;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    } else if (accessTokenOrTokenResponse) {
      // realize of the second overload
      this.accessToken = accessTokenOrTokenResponse.access_token;
      this.refreshToken = accessTokenOrTokenResponse.refresh_token;
      this.createdAt = new Date(accessTokenOrTokenResponse.created_at);
      this.updatedAt = new Date(accessTokenOrTokenResponse.created_at);
    }

  }
}