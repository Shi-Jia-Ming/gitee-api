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
  constructor(accessToken?: string, refreshToken?: string, createdAt?: Date, updatedAt?: Date) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}