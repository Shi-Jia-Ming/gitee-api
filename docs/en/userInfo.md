# UserInformation Service API

---

This service is mainly responsible for users managing their profile and searching other account information.

## Get User Information

This api is to get common user information by user access token.

### Function declare

```typescript
/**
 * get user information by access token
 *
 * @param accessToken   user access token
 * @param callback      callback function
 */
public static getUserInfo(accessToken: string, callback: (err: unknown, userInfo: undefined | UserInfo) => void): void;
public static getUserInfo(accessToken: string): Promise<UserInfo>;
```

### Param Introduce

- params:
    - accessToken: user access token

- return value: UserInfo
    - id: user id
    - login: user login name
    - name: user name
    - avatarUrl: user avatar url
    - url: user home page url
    - htmlUrl: user html url
    - followersUrl: user followers url
    - followingUrl: user following url
    - gistsUrl: user gists url
    - starredUrl: user starred url
    - subscriptionsUrl: user subscriptions url
    - organizationsUrl: user organizations url
    - reposUrl: user repos url
    - eventsUrl: user events url
    - receivedEventsUrl: user received events url
    - type: user type
    - siteAdmin: user is site admin
    - createdAt: user created date
    - updatedAt: user information updated date

### Usage

This is a simple case of the API:

```typescript
const userInfo: UserInfo = await UserInfoService.getUserInfo(
  process.env.ACCESS_TOKEN as string,
);

console.log(userInfo.name);
```

You can refer to [test file](../../src/__tests__/service/user.info.service.test.ts) for the full usage of
both `async` function call and `callback` function call.
Refer to the following instance:

- getUserInfo async
- getUserInfo callback

## Get User Public Key List

This api is to get user public key list by user access token.

### Function declare

```typescript
/**
 * get user public key list
 *
 * @param accessToken   access token
 * @param page          page number
 * @param perPage       number of each page
 * @param callback      callback function
 */
public static getPublicKeyList(accessToken: string, page: number, perPage: number, callback: (err: unknown, publicKeyInfoList: undefined | PublicKeyInfo[]) => void): void;
public static getPublicKeyList(accessToken: string, page: number, perPage: number): Promise<PublicKeyInfo[]>;
```

### Param Introduce

- params:
  - accessToken: user access token
  - page: page number
  - perPage: number of each page

- return value: PublicKeyInfo[]
  - id: public key id
  - key: user public key value
  - title: user public key title
  - createdAt: user public key created date
  - updatedAt: user public key updated date

### Usage

This is a simple case of the API:

```typescript
const publicKeyInfoList: PublicKeyInfo[] = await UserInfoService.getPublicKeyList(
        process.env.ACCESS_TOKEN as string,
        1, 5
);

console.log(publicKeyInfoList);
```

You can refer to [test file](../../src/__tests__/service/user.info.service.test.ts) for the full usage of both `async` function call and `callback` function call.
Refer to the following instance:

- getPublicKeyList async
- getPublicKeyList callback

## Get Information List of User's Followers

This api is to get information of accounts that follows the user by user access token.

### Function declare

```typescript
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
```

### Param Introduce

- params:
  - accessToken: user access token
  - page: page number
  - perPage: number of each page

- return value: UserInfo[]
  - id: user id
  - login: user login name
  - name: user name
  - avatarUrl: user avatar url
  - url: user home page url
  - htmlUrl: user html url
  - followersUrl: user followers url
  - followingUrl: user following url
  - gistsUrl: user gists url
  - starredUrl: user starred url
  - subscriptionsUrl: user subscriptions url
  - organizationsUrl: user organizations url
  - reposUrl: user repos url
  - eventsUrl: user events url
  - receivedEventsUrl: user received events url
  - type: user type
  - siteAdmin: user is site admin
  - createdAt: user created date
  - updatedAt: user information updated date

### Usage

This is a simple case of the API:

```typescript
  const followerInfoList: UserInfo[] = await UserInfoService.getUserFollowerList(
        process.env.ACCESS_TOKEN as string,
        1, 5
);

console.log(followerInfoList);
```

You can refer to [test file](../../src/__tests__/service/user.info.service.test.ts) for the full usage of both `async` function call and `callback` function call.
Refer to the following instance:

- getUserFollowerList async
- getUserFollowerList callback

## Get Information List of User's Followings

This api is to get information of user's following account by user access token.

### Function declare

```typescript
/**
 * get information list of user's following
 *
 * @param accessToken   access token
 * @param page          page number
 * @param perPage       number of each page
 * @param callback      callback function
 */
public static getUserFollowingList(accessToken: string, page: number, perPage: number, callback: (err: unknown, followingInfoList: undefined | UserInfo[]) => void): void;
public static getUserFollowingList(accessToken: string, page: number, perPage: number): Promise<UserInfo[]>;
```

### Param Introduce

- params:
  - accessToken: user access token
  - page: page number
  - perPage: number of each page

- return value: UserInfo[]
  - id: user id
  - login: user login name
  - name: user name
  - avatarUrl: user avatar url
  - url: user home page url
  - htmlUrl: user html url
  - followersUrl: user followers url
  - followingUrl: user following url
  - gistsUrl: user gists url
  - starredUrl: user starred url
  - subscriptionsUrl: user subscriptions url
  - organizationsUrl: user organizations url
  - reposUrl: user repos url
  - eventsUrl: user events url
  - receivedEventsUrl: user received events url
  - type: user type
  - siteAdmin: user is site admin
  - createdAt: user created date
  - updatedAt: user information updated date

### Usage

This is a simple case of the API:

```typescript
const followingInfoList: UserInfo[] = await UserInfoService.getUserFollowingList(
        process.env.ACCESS_TOKEN as string,
        1, 5,
);

console.log(followingInfoList);
```

You can refer to [test file](../../src/__tests__/service/user.info.service.test.ts) for the full usage of both `async` function call and `callback` function call.
Refer to the following instance:

- getUserFollowingList async
- getUserFollowingList callback