import TokenInfo from "../entity/token.info";
import axios, { AxiosResponse } from "axios";
import { TokenResponse } from "../interface/token.response";

/**
 * user authorization service
 *
 * @author: Shi-Jia-Ming
 */
export class AuthorizationService {
  /**
   * generate access token by temporary code
   *
   * @param code          temporary code
   * @param clientId      client id
   * @param redirectUri   redirect url
   * @param clientSecret  client secret
   * @param callback      callback function
   */
  public static generateAccessTokenByCode(code: string, clientId: string, redirectUri: string, clientSecret: string, callback: (err: unknown, data: TokenInfo | undefined) => void): void;
  public static generateAccessTokenByCode(code: string, clientId: string, redirectUri: string, clientSecret: string): Promise<TokenInfo>;

  public static async generateAccessTokenByCode(tmpCode: string, clientId: string, redirectUri: string, clientSecret: string, callback?: (err: unknown, data: TokenInfo | undefined) => void): Promise<void | TokenInfo> {
    const data: {
      grant_type: string,
      code: string,
      client_id: string,
      redirect_uri: string,
      client_secret: string
    } = {
      grant_type: "authorization_code",
      code: tmpCode,
      client_id: clientId,
      redirect_uri: redirectUri,
      client_secret: clientSecret,
    };

    if (callback !== undefined) {
      // use callback to accept
      const response: Promise<AxiosResponse<TokenResponse>> = axios.post<typeof data, AxiosResponse<TokenResponse>>("https://gitee.com/oauth/token", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      response.then((res: AxiosResponse<TokenResponse>) => {
        const tokenInfo: TokenInfo = new TokenInfo(res.data.access_token, res.data.refresh_token, new Date(res.data.created_at), new Date(res.data.created_at));
        console.info("Authorize success (with code)!");
        callback(undefined, tokenInfo);
        return;
      }).catch((err: any) => {
        console.error("Authorize failed, error: ", err.message);
        callback(err, undefined);
        return;
      });
    }
    // return value
    const response: AxiosResponse<TokenResponse> = await axios.post<typeof data, AxiosResponse<TokenResponse>>("https://gitee.com/oauth/token", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return new TokenInfo(response.data.access_token, response.data.refresh_token, new Date(response.data.created_at), new Date(response.data.created_at));
  }

  /**
   * generate access token by password and email
   *
   * @param email         user email
   * @param password      user password
   * @param clientId      client id
   * @param clientSecret  client secret
   * @param callback      callback function
   */
  public static generateAccessTokenByPassword(email: string, password: string, clientId: string, clientSecret: string, callback: (err: unknown, data: TokenInfo | undefined) => void): void;
  public static generateAccessTokenByPassword(email: string, password: string, clientId: string, clientSecret: string): Promise<TokenInfo>;

  public static async generateAccessTokenByPassword(email: string, pwd: string, clientId: string, clientSecret: string, callback?: (err: unknown, data: TokenInfo | undefined) => void): Promise<void | TokenInfo> {
    const data: {
      grant_type: string,
      username: string,
      password: string,
      client_id: string,
      client_secret: string,
      scope: string
    } = {
      grant_type: "password",
      username: email,
      password: pwd,
      client_id: clientId,
      client_secret: clientSecret,
      scope: "user_info projects pull_requests issues notes keys hook groups gists enterprises",
    };

    if (callback !== undefined) {
      // use callback to accept
      const response: Promise<AxiosResponse<TokenResponse>> = axios.post<typeof data, AxiosResponse<TokenResponse>>("https://gitee.com/oauth/token", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      response.then((res: AxiosResponse<TokenResponse>) => {
        const tokenInfo: TokenInfo = new TokenInfo(res.data.access_token, res.data.refresh_token, new Date(res.data.created_at), new Date(res.data.created_at));
        console.info("Authorize success (with password)!");
        callback(undefined, tokenInfo);
        return;
      }).catch((err: any) => {
        console.error("Authorize failed, error: ", err.message);
        callback(err, undefined);
        return;
      });
    }
    // return value
    const response: AxiosResponse<TokenResponse> = await axios.post<typeof data, AxiosResponse<TokenResponse>>("https://gitee.com/oauth/token", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return new TokenInfo(response.data.access_token, response.data.refresh_token, new Date(response.data.created_at), new Date(response.data.created_at));
  }
}
