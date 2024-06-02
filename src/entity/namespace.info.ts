/**
 * namespace entity
 *
 * @author: Shi-Jia-Ming
 */
export class NamespaceInfo {
  /**
   * namespace id
   */
  public id?: number;
  /**
   * name of namespace
   */
  public name?: string;
  /**
   * namespace type
   */
  public type?: NamespaceType;
  /**
   * path of namespace
   */
  public path?: string;
  /**
   * url of namespace space
   */
  public htmlUrl?: string;
}

/**
 * namespace type enum
 */
export enum NamespaceType {
  /**
   * namespace type: enterprise
   */
  ENTERPRISE,
  /**
   * namespace type: user
   */
  NULL,
  /**
   * namespace type: organization
   */
  GROUP
}