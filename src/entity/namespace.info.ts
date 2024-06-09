import { NamespaceResponse } from "../interface/namespace.response";

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
  /**
   * parent namespace
   */
  public parent?: NamespaceInfo;

  constructor(
    id: number,
    name: string,
    type: NamespaceType,
    path: string,
    htmlUrl: string,
    parent: NamespaceInfo,
  );

  // tslint:disable-next-line:unified-signatures
  constructor(namespaceResponse: NamespaceResponse);
  constructor();

  constructor(
    idOrNamespaceResponse?: number | NamespaceResponse,
    name?: string,
    type?: NamespaceType,
    path?: string,
    htmlUrl?: string,
    parent?: NamespaceInfo
  ) {
    if (typeof idOrNamespaceResponse === "number") {
      this.id = idOrNamespaceResponse;
      this.name = name;
      this.type = type;
      this.path = path;
      this.htmlUrl = htmlUrl;
      this.parent = parent;
    } else if (idOrNamespaceResponse) {
      this.id = idOrNamespaceResponse.id;
      this.name = idOrNamespaceResponse.name;
      this.type = NamespaceType[idOrNamespaceResponse.type as keyof typeof NamespaceType];
      this.path = idOrNamespaceResponse.title;
      this.htmlUrl = idOrNamespaceResponse.url;
      if (idOrNamespaceResponse.parent) {
        this.parent = new NamespaceInfo(idOrNamespaceResponse.parent);
      }
    }
  }
}

/**
 * namespace type enum
 */
export enum NamespaceType {
  /**
   * namespace type: enterprise
   */
  ENTERPRISE = "Enterprise",
  /**
   * namespace type: user
   */
  NULL = "null",
  /**
   * namespace type: organization
   */
  GROUP = "Group"
}