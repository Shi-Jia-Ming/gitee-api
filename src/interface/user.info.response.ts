/**
 * Response interface of getting user information
 *
 * @author: Shi-Jia-Ming
 */
export interface UserInfoResponse {
  /**
   * url of user avatar
   */
  avatar_url?: string;
  /**
   * bio
   */
  bio?: string;
  /**
   * blog
   */
  blog?: string;
  /**
   * created_at
   */
  created_at?: string;
  /**
   * email
   */
  email?: string;
  /**
   * url of user events
   */
  events_url?: string;
  /**
   * followers count
   */
  followers?: number;
  /**
   * url of followers information
   */
  followers_url?: string;
  /**
   * following count
   */
  following?: number;
  /**
   * url of following information
   */
  following_url?: string;
  /**
   * url of user gists
   */
  gists_url?: string;
  /**
   * user profile html url
   */
  html_url?: string;
  /**
   * id
   */
  id?: number;
  /**
   * login
   */
  login?: string;
  /**
   * member_role
   */
  member_role?: string
  /**
   * name
   */
  name?: string;
  /**
   * url of user organization information
   */
  organizations_url?: string;
  /**
   * public gists count
   */
  public_gists?: number;
  /**
   * public repositories count
   */
  public_repos?: number;
  /**
   * url of user received events
   */
  received_events_url?: string;
  /**
   * remark name of enterprise
   */
  remark?: string;
  /**
   * url of user repositories
   */
  repos_url?: string;
  /**
   * user stared repositories count
   */
  stared?: number;
  /**
   * url of user stared repositories
   */
  starred_url?: string;
  /**
   * url of user subscriptions
   */
  subscriptions_url?: string;
  /**
   * type
   */
  type?: string;
  /**
   * updated_at
   */
  updated_at?: string;
  /**
   * url of user information
   */
  url?: string;
  /**
   * user watched repositories count
   */
  watched?: number;
  /**
   * user weibo
   */
  weibo?: string;
}