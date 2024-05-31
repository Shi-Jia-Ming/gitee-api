/**
 * organization entity
 * 
 * @author: Shi-Jia-Ming
 */
export default class OrganizationInfo {
  /**
   * organization id
   */
  public id?: number;
  /**
   * name of organization space
   */
  public login?: string;
  /**
   * name of organization
   */
  public name?: string;
  /**
   * url of organization
   */
  public url?: string;
  /**
   * avatar url of organization
   */
  public avatarUrl?: string;
  /**
   * url of repositories created by organization
   */
  public reposUrl?: string;
  /**
   * url of organization events
   */
  public eventsUrl?: string;
  /**
   * url of memebers
   */
  public membersUrl?: string;
  /**
   * description of organization
   */
  public description?: string;
  /**
   * members count of organization
   */
  public membersCount?: number;
}