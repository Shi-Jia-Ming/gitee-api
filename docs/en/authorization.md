# Authorization Service API

---

The service mainly responsible for the user authorization in Gitee.

## Generate AccessToken by Code

This api is to get user accessToken by the temporary get from official authorization page.

> To find where to generate the temporary code, you can refer to [Gitee Oauth](https://gitee.com/api/v5/oauth_doc) for
> help.

### Function declare

```typescript
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
```

### Param Introduce

- params:
    - code: temporary code generate from official website
    - clientId: your app's client id, it is generated after creating gitee app
    - redirectUri: url to redirect when succeed to authorize, it is set when creating gitee app
    - clientSecret: your app's client secret id, it is generated after creating gitee app


- return value: TokenInfo
    - accessToken: user access token
    - refreshToken: refresh token use to renew an access token
    - createdAt: date that the token created
    - updatedAt: date that the token last updated

### Usage

This is a simple case of the API:

```typescript
const tokenInfo: TokenInfo = await AuthorizationService.generateAccessTokenByCode(
  process.env.CODE as string,
  process.env.CLIENT_ID as string,
  process.env.REDIRECT_URI as string,
  process.env.CLIENT_SECRET as string
);

console.log(tokenInfo.accessToken);
```

You can refer to [test file](../../src/__tests__/service/authorization.service.test.ts) for the full usage of
both `async` function call and `callback` function call. Refer to the following instance:

- generateAccessTokenByCode async
- generateAccessTokenByCode callback

## Generate AccessToken by Password

This api is to get user accessToken by the email and password of gitee account.

### Function declare

```typescript
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
```

### Param Introduce

- params:
    - email: email of user account
    - password: password of user account
    - clientId: your app's client id, it is generated after creating gitee app
    - clientSecret: your app's client secret id, it is generated after creating gitee app


- return value: TokenInfo
    - accessToken: user access token
    - refreshToken: refresh token use to renew an access token
    - createdAt: date that the token created
    - updatedAt: date that the token last updated

### Usage

This is a simple case of the API:

```typescript
const tokenInfo: TokenInfo = await AuthorizationService.generateAccessTokenByPassword(
  process.env.EMAIL as string,
  process.env.PASSWORD as string,
  process.env.CLIENT_ID as string,
  process.env.CLIENT_SECRET as string,
);

console.log(tokenInfo.accessToken);
```

You can refer to [test file](../../src/__tests__/service/authorization.service.test.ts) for the full usage of
both `async` function call and `callback` function call. Refer to the following instance:

- generateAccessTokenByPassword async
- generateAccessTokenByPassword callback

## Refresh AccessToken

This api is to refresh a new accessToken by the refreshToken provided with accessToken.

### Function declare

```typescript
/**
 * refresh access token by refresh token
 *
 * @param refreshToken  refresh token
 * @param callback      callback function
 */
public static refreshAccessToken(refreshToken: string, callback: (err: unknown, data: TokenInfo | undefined) => void): void;
public static refreshAccessToken(refreshToken: string): Promise<TokenInfo>;
```

### Param Introduce

- params:
    - refreshToken: refresh token generated with accessToken

- return value: TokenInfo
    - accessToken: user access token
    - refreshToken: refresh token use to renew an access token
    - createdAt: date that the token created
    - updatedAt: date that the token last updated

### Usage

This is a simple case of the API:

```typescript
const tokenInfo: TokenInfo = await AuthorizationService.refreshAccessToken(
  process.env.REFRESH_TOKEN as string,
);

console.log(tokenInfo.accessToken);
```

You can refer to [test file](../../src/__tests__/service/authorization.service.test.ts) for the full usage of
both `async` function call and `callback` function call. Refer to the following instance:

- refreshAccessToken async
- refreshAccessToken callback