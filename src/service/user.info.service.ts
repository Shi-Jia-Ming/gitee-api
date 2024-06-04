import UserInfo from "../entity/user.info";
import axios, { AxiosResponse } from "axios";
import { UserInfoResponse } from "../interface/user.info.response";
import PublicKeyInfo from "../entity/public.key.info";
import { PublicKeyResponse } from "../interface/public.key.response";

/**
 * user information service
 *
 * @author: Shi-Jia-Ming
 */
export default class UserInfoService {

  /**
   * get user information by access token
   *
   * @param accessToken   user access token
   * @param callback      callback function
   */
  public static getUserInfo(accessToken: string, callback: (err: unknown, userInfo: undefined | UserInfo) => void): void;
  public static getUserInfo(accessToken: string): Promise<UserInfo>;

  public static async getUserInfo(accessToken: string, callback?: (err: unknown, userInfo: undefined | UserInfo) => void): Promise<void | UserInfo> {
    const data: {
      access_token: string
    } = {
      access_token: accessToken
    };

    if (callback !== undefined) {
      // use callback to accept
      const response: Promise<AxiosResponse<UserInfoResponse>> = axios.get<typeof data, AxiosResponse<UserInfoResponse>>("https://gitee.com/api/v5/user", {
        params: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      response.then((res: AxiosResponse<UserInfoResponse>) => {
        const userInfo: UserInfo = new UserInfo(res.data!);
        console.info("Get user information success!");
        callback(undefined, userInfo);
        return;
      }).catch((err: any) => {
        console.error("Get user information failed, error: ", err.message);
        callback(err, undefined);
        return;
      });
    }
    // return value
    const response: AxiosResponse<UserInfoResponse> = await axios.get<typeof data, AxiosResponse<UserInfoResponse>>("https://gitee.com/api/v5/user", {
      params: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return new UserInfo(response.data!);
  }

  /**
   * get user public key list
   *
   * @param accessToken   access token
   * @param page          page number
   * @param perPage       number of each page
   * @param callback      callback function
   */
  public static getPublicKeyList(accessToken: string, page: number, perPage: number, callback: (err: unknown, publicKeyInfoList: undefined | PublicKeyInfo[]) => void): void;
  public static getPublicKeyList(accessToken: string, page: number, perPage: number): Promise<PublicKeyResponse[]>;

  public static async getPublicKeyList(accessToken: string, pg: number, perPage: number, callback?: (err: unknown, publicKeyInfoList: undefined | PublicKeyInfo[]) => void): Promise<void | PublicKeyInfo[]> {
    const data: {
      access_token: string,
      page: number,
      per_page: number
    } = {
      access_token: accessToken,
      page: pg,
      per_page: perPage
    };

    if (callback !== undefined) {
      // use callback to accept
      const response: Promise<AxiosResponse<PublicKeyResponse[]>> = axios.get<typeof data, AxiosResponse<PublicKeyResponse[]>>("https://gitee.com/api/v5/user/keys", {
        params: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      response.then((res: AxiosResponse<PublicKeyResponse[]>) => {
        const publicKeyInfoList: PublicKeyInfo[] = [];
        res.data.forEach((publicKeyResponse: PublicKeyResponse) => {
          publicKeyInfoList.push(new PublicKeyInfo(publicKeyResponse));
        });
        console.info("Get public key list success!");
        callback(undefined, publicKeyInfoList);
        return;
      }).catch((err: any) => {
        console.error("Get public key list failed, error: ", err.message);
        callback(err, undefined);
        return;
      });
    }
    // return value
    const response: AxiosResponse<PublicKeyResponse[]> = await axios.get<typeof data, AxiosResponse<PublicKeyResponse[]>>("https://gitee.com/api/v5/user/keys", {
      params: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const publicKeyInfoList: PublicKeyInfo[] = [];
    response.data.forEach((publicKeyResponse: PublicKeyResponse) => {
      publicKeyInfoList.push(new PublicKeyInfo(publicKeyResponse));
    });
    return publicKeyInfoList;
  }

  /**
   * get information list of user's followers
   *
   * @param accessToken   access token
   * @param page          page number
   * @param perPage       number of each page
   * @param callback      callback function
   */
  public static getUserFollowerList(accessToken: string, page: number, perPage: number, callback: (err: unknown, followerInfoList: undefined | UserInfo[]) => void): void;
  public static getUserFollowerList(accessToken: string, page: number, perPage: number): Promise<UserInfo[]>;

  public static async getUserFollowerList(accessToken: string, pg: number, perPage: number, callback?: (err: unknown, followerInfoList: undefined | UserInfo[]) => void): Promise<void | UserInfo[]> {
    const data: {
      access_token: string,
      page: number,
      per_page: number
    } = {
      access_token: accessToken,
      page: pg,
      per_page: perPage
    };

    if (callback !== undefined) {
      // use callback to accept
      const response: Promise<AxiosResponse<UserInfoResponse[]>> = axios.get<typeof data, AxiosResponse<UserInfoResponse[]>>("https://gitee.com/api/v5/user/followers", {
        params: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      response.then((res: AxiosResponse<UserInfoResponse[]>) => {
        const followerInfoList: UserInfo[] = [];
        res.data.forEach((userInfoResponse: UserInfoResponse) => {
          followerInfoList.push(new UserInfo(userInfoResponse));
        });
        console.info("Get follower information list success!");
        callback(undefined, followerInfoList);
        return;
      }).catch((err: any) => {
        console.error("Get follower information list failed, error: ", err.message);
        callback(err, undefined);
        return;
      });
    }
    // return value
    const response: AxiosResponse<UserInfoResponse[]> = await axios.get<typeof data, AxiosResponse<UserInfoResponse[]>>("https://gitee.com/api/v5/user/followers", {
      params: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const followerInfoList: UserInfo[] = [];
    response.data.forEach((userInfoResponse: UserInfoResponse) => {
      followerInfoList.push(new UserInfo(userInfoResponse));
    });
    return followerInfoList;
  }
}