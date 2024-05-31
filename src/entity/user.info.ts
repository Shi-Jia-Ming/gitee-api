/**
 * user info entity
 * 
 * @author: Shi-Jia-Ming
 */
export default class UserInfo {
  /**
   * user id
   */
  public id?: number;
  /**
   * name of user space
   */
  public login?: string;
  /**
   * user name
   */
  public name?: string;
  /**
   * user acatar url
   */
  public avatarUrl?: string;
  /**
   * url of user space
   */
  public htmlUrl?: string;
  /**
   * url of repositories stared
   */
  public staredUrl?: string;
  /**
   * url of organizations user joined
   */
  public organizationUrl?: string;
  /**
   * url of repositories user created
   */
  public reposUrl?: string;
  /**
   * url of user events
   */
  public eventsUrl?: string;
  /**
   * url of received events
   */
  public receivedEventsUrl?: string;
  /**
   * type of account
   */
  public type?: string;
  /**
   * blog of user
   */
  public blog?: string;
  /**
   * weibo of user
   */
  public weibo?: string;
  /**
   * bio of user
   */
  public bio?: string;
  /**
   * public repositories count user created
   */
  public publicRepos?: number;
  /**
   * public gists count user created
   */
  public publicGists?: number;
  /**
   * followers count
   */
  public followers?: number;
  /**
   * following count
   */
  public following?: number;
  /**
   * stared repositories count
   */
  public stared?: number;
  /**
   * watched repositories count
   */
  public watched?: number;
}