/**
 * Response interface of getting token
 *
 * @author: Shi-Jia-Ming
 */
export interface TokenResponse {
  /**
   * access token
   */
  access_token?: string;
  /**
   * token type
   */
  token_type?: string;
  /**
   * expire in
   */
  expires_in?: number;
  /**
   * refresh token
   */
  refresh_token?: string;
  /**
   * authorized scope
   */
  scope?: string;
  /**
   * created at
   */
  created_at: number;
}