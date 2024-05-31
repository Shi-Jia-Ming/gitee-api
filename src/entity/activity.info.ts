import OrganizationInfo from "./organization.info";
import UserInfo from "./user.info";

/**
 * activity info entity
 * 
 * @author: Shi-Jia-Ming
 */
export default class ActivityInfo {
  /**
   * activity id
   */
  public id?: number;
  /**
   * type of activity
   */
  public type?: ActivityType;
  /**
   * publisher of activity
   */
  public actor?: UserInfo;
  /**
   * repository of activity
   */
  public repo?: Repo;
  /**
   * organization of activity
   */
  public org?: OrganizationInfo;
  /**
   * is the activity public
   */
  public isPublic?: boolean;
  /**
   * created time of activity
   */
  public createdAt?: Date;
  /**
   * payload of activity
   */
  public payload?: any;
};

/**
 * repository entity of activity
 */
export class Repo {
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
  public namespace?: Namespace;
};

/**
 * namespace entity
 */
export class Namespace {
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
};

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

/**
 * event type enum of activity
 */
export enum ActivityType {
  /**
   * event type: pull request
   */
  PULL_REQUEST_EVENT,
  /**
   * event type: pull request comment
   */
  PULL_REQUEST_COMMENT_EVENT,
  /**
   * event type: push
   */
  PUSH_EVENT,
  /**
   * event type: create
   */
  CREATE_EVENT
};