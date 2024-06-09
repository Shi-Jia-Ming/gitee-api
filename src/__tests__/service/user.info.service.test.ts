import UserInfo from "../../entity/user.info";
import UserInfoService from "../../service/user.info.service";
import * as dotenv from "dotenv";
import PublicKeyInfo from "../../entity/public.key.info";
import { NamespaceInfo } from "../../entity/namespace.info";

dotenv.config();

test("getUserInfo async", async () => {
  const userInfo: UserInfo = await UserInfoService.getUserInfo(
    process.env.ACCESS_TOKEN as string,
  );

  expect<string>(userInfo.name!).toBe("Shi-Jia-Ming");
});

test("getUserInfo callback", () => {
  UserInfoService.getUserInfo(
    process.env.ACCESS_TOKEN as string,
    (err: unknown, userInfo: undefined | UserInfo) => {
      if (!err) {
        expect<string>(userInfo!.name!).toBe("Shi-Jia-Ming");
      }
    },
  );
});

test("getPublicKeyList async", async () => {
  const publicKeyInfoList: PublicKeyInfo[] = await UserInfoService.getPublicKeyList(
    process.env.ACCESS_TOKEN as string,
    1, 5
  );

  console.log(publicKeyInfoList);
});

test("getPublicKeyList callback", () => {
  UserInfoService.getPublicKeyList(
    process.env.ACCESS_TOKEN as string,
    1, 5,
    (err: unknown, publicKeyInfoList: undefined | PublicKeyInfo[]) => {
      if (!err) {
        console.log(publicKeyInfoList);
      }
    }
  )
});

test("getUserFollowerList async", async () => {
  const followerInfoList: UserInfo[] = await UserInfoService.getUserFollowerList(
    process.env.ACCESS_TOKEN as string,
    1, 5
  );

  console.log(followerInfoList);
});

test("getUserFollowerList callback", () => {
  UserInfoService.getUserFollowerList(
    process.env.ACCESS_TOKEN as string,
    1, 5,
    (err: unknown, followerInfoList: undefined | UserInfo[]) => {
      if (!err) {
        console.log(followerInfoList);
      }
    }
  );
});

test("getUserFollowingList async", async () => {
  const followingInfoList: UserInfo[] = await UserInfoService.getUserFollowingList(
    process.env.ACCESS_TOKEN as string,
    1, 5,
  );

  console.log(followingInfoList);
});

test("getUserFollowingList callback", () => {
  UserInfoService.getUserFollowingList(
    process.env.ACCESS_TOKEN as string,
    1, 5,
    (err: unknown, followingInfoList: undefined | UserInfo[]) => {
      if (!err) {
        console.log(followingInfoList);
      }
    }
  );
});

test("getUserNamespaceList async", async () => {
  const namespaceList: NamespaceInfo[] = await UserInfoService.getUserNamespaceList(
    process.env.ACCESS_TOKEN as string,
    "project"
  );

  console.log(namespaceList);
});

test.only("getUserNamespaceList callback", () => {
  UserInfoService.getUserNamespaceList(
    process.env.ACCESS_TOKEN as string,
    "project",
    (err: unknown, namespaceList: undefined | NamespaceInfo[]) => {
      if (!err) {
        console.log(namespaceList);
      }
    }
  );
});