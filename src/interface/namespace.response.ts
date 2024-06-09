/**
 * Response interface of namespace
 *
 * @author: Shi-Jia-Ming
 */
export interface NamespaceResponse {
  /**
   * id
   */
  id?: number;
  /**
   * name
   */
  name?: string;
  /**
   * html url
   */
  html_url?: string;
  /**
   * path to get detail information
   */
  path?: string;
  /**
   * type
   * <ul>
   *   <li>Enterprise: Enterprise</li>
   *   <li>Group: Organization</li>
   *   <li>null: User</li>
   * </ul>
   */
  type?: string;
  /**
   * parent namespace
   */
  parent?: NamespaceResponse;
}