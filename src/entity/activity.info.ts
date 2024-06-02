import OrganizationInfo from "./organization.info";
import UserInfo from "./user.info";
import RepositoryInfo from "./repository.info";

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
  public repo?: RepositoryInfo;
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
}