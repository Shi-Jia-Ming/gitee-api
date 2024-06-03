import UserInfo from "../entity/user.info";
import axios, { AxiosResponse } from "axios";
import { UserInfoResponse } from "../interface/user.info.response";

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
}