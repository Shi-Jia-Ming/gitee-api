import UserInfo from "../../entity/user.info";
import UserInfoService from "../../service/user.info.service";
import * as dotenv from "dotenv";
import PublicKeyInfo from "../../entity/public.key.info";

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