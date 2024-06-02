import { NamespaceInfo } from "./namespace.info";

/**
 * repository entity of activity
 *
 * @author: Shi-Jia-Ming
 */
export default class RepositoryInfo {
  /**
   * repository id
   */
  public id?: number;
  /**
   * full name of repository
   */
  public fullName?: string;
  /**
   * name of repository
   */
  public humanName?: string;
  /**
   * url of repository
   */
  public url?: string;
  /**
   * namespace belongs to
   */
  public namespace?: NamespaceInfo;
}