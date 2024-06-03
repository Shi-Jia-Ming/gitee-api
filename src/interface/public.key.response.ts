/**
 * Response interface of getting public key
 *
 * @author: Shi-Jia-Ming
 */
export interface PublicKeyResponse {
  /**
   * id
   */
  id?: number;
  /**
   * key
   */
  key?: string;
  /**
   * title
   */
  title?: string;
  /**
   * url to get detail information
   */
  url?: string;
  /**
   * created_at
   */
  created_at?: string;
}