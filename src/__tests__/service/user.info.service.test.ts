import UserInfo from "../../entity/user.info";
import UserInfoService from "../../service/user.info.service";
import * as dotenv from "dotenv";

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