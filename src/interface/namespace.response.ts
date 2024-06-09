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
   * title
   */
  title?: string;
  /**
   * url to get detail information
   */
  url?: string;
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