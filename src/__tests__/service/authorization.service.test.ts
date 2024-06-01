import { AuthorizationService } from "../../service/authorization.service";
import TokenInfo from "../../entity/token.info";

test("generateAccessTokenByCode async", async () => {
  const tokenInfo = await AuthorizationService.generateAccessTokenByCode(
    "e5110e3c9c9f9ddae749f3c840a032f15f8373b9421032b445429b0fec84b2e2",
    "9d5424c75ba160e8c4d3f7293a750fddf6cf131b5ebfd55200c106f9cddb286c",
    "https://gitee.com/stunning-head-cub",
    "1342ac77912f3ef2e85e2294cbdb3e9d82258112349b11f674934f4ebe61f047",
  );
  console.log(tokenInfo.accessToken);
  console.log(tokenInfo.refreshToken);
});

test("generateAccessTokenByCode callback", () => {
  AuthorizationService.generateAccessTokenByCode(
    "1639715cf376b9c2c4b36dcd517e27a4c4d57bcf4d10686bf6c6a36452b60a3b",
    "9d5424c75ba160e8c4d3f7293a750fddf6cf131b5ebfd55200c106f9cddb286c",
    "https://gitee.com/stunning-head-cub",
    "1342ac77912f3ef2e85e2294cbdb3e9d82258112349b11f674934f4ebe61f047",
    (err: any, data: TokenInfo | undefined) => {
      if (!err) {
        console.log(data?.accessToken);
        console.log(data?.refreshToken);
      }
    });
});