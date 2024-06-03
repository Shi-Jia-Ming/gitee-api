import { UserInfoResponse } from "../interface/user.info.response";

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
   * user avatar url
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

  constructor(
    id: number,
    login: string,
    name: string,
    avatarUrl: string,
    htmlUrl: string,
    staredUrl: string,
    organizationUrl: string,
    reposUrl: string,
    eventsUrl: string,
    receivedEventsUrl: string,
    type: string,
    blog: string,
    weibo: string,
    bio: string,
    publicRepos: number,
    publicGists: number,
    followers: number,
    following: number,
    stared: number,
    watched: number
  );

  // tslint:disable-next-line:unified-signatures
  constructor(userInfoResponse: UserInfoResponse);
  constructor();

  constructor(
    idOrUserInfoResponse?: number | UserInfoResponse,
    login?: string,
    name?: string,
    avatarUrl?: string,
    htmlUrl?: string,
    staredUrl?: string,
    organizationUrl?: string,
    reposUrl?: string,
    eventsUrl?: string,
    receivedEventsUrl?: string,
    type?: string,
    blog?: string,
    weibo?: string,
    bio?: string,
    publicRepos?: number,
    publicGists?: number,
    followers?: number,
    following?: number,
    stared?: number,
    watched?: number
  ) {
    if (typeof idOrUserInfoResponse === "number") {
      // realize of the first overload
      this.id = idOrUserInfoResponse;
      this.login = login;
      this.name = name;
      this.avatarUrl = avatarUrl;
      this.htmlUrl = htmlUrl;
      this.staredUrl = staredUrl;
      this.organizationUrl = organizationUrl;
      this.reposUrl = reposUrl;
      this.eventsUrl = eventsUrl;
      this.receivedEventsUrl = receivedEventsUrl;
      this.type = type;
      this.blog = blog;
      this.weibo = weibo;
      this.bio = bio;
      this.publicRepos = publicRepos;
      this.publicGists = publicGists;
      this.followers = followers;
      this.following = following;
      this.stared = stared;
      this.watched = watched;
    } else if (idOrUserInfoResponse) {
      // realize of the second overload
      this.id = idOrUserInfoResponse.id;
      this.login = idOrUserInfoResponse.login;
      this.name = idOrUserInfoResponse.name;
      this.avatarUrl = idOrUserInfoResponse.avatar_url;
      this.htmlUrl = idOrUserInfoResponse.html_url;
      this.staredUrl = idOrUserInfoResponse.starred_url;
      this.organizationUrl = idOrUserInfoResponse.organizations_url;
      this.reposUrl = idOrUserInfoResponse.repos_url;
      this.eventsUrl = idOrUserInfoResponse.events_url;
      this.receivedEventsUrl = idOrUserInfoResponse.received_events_url;
      this.type = idOrUserInfoResponse.type;
      this.blog = idOrUserInfoResponse.blog;
      this.weibo = idOrUserInfoResponse.weibo;
      this.bio = idOrUserInfoResponse.bio;
      this.publicRepos = idOrUserInfoResponse.public_repos;
      this.publicGists = idOrUserInfoResponse.public_gists;
      this.followers = idOrUserInfoResponse.followers;
      this.following = idOrUserInfoResponse.following;
      this.stared = idOrUserInfoResponse.stared;
      this.watched = idOrUserInfoResponse.watched;
    }
  }
}