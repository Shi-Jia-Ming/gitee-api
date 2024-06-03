import { PublicKeyResponse } from "../interface/public.key.response";

/**
 * public key info entity
 *
 * @author: Shi-Jia-Ming
 */
export default class PublicKeyInfo {
  /**
   * id
   */
  id?: number;
  /**
   * key
   */
  key?: string;
  /**
   * title
   */
  title?: string;
  /**
   * url to get detail information
   */
  url?: string;
  /**
   * created_at
   */
  createdAt?: Date;

  /**
   * constructor
   *
   * @param id          id
   * @param key         key
   * @param title       title
   * @param url         url to get detail information
   * @param createdAt   created_at
   */
  constructor(id: number, key: string, title: string, url: string, createdAt: Date);
  // tslint:disable-next-line:unified-signatures
  constructor(publicKeyResponse: PublicKeyResponse);
  constructor();

  constructor(
    idOrPublicKeyResponse?: number | PublicKeyResponse,
    key?: string,
    title?: string,
    url?: string,
    createdAt?: Date
  ) {
    if (typeof idOrPublicKeyResponse === "number") {
      // realize of the first overload
      this.id = idOrPublicKeyResponse;
      this.key = key;
      this.title = title;
      this.url = url;
      this.createdAt = createdAt;
    } else if (idOrPublicKeyResponse) {
      this.id = idOrPublicKeyResponse.id;
      this.key = idOrPublicKeyResponse.key;
      this.title = idOrPublicKeyResponse.title;
      this.url = idOrPublicKeyResponse.url;
      this.createdAt = new Date(idOrPublicKeyResponse.created_at!);
    }
  }
}