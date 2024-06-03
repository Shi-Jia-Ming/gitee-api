import { AuthorizationService } from "../../service/authorization.service";
import TokenInfo from "../../entity/token.info";
import * as dotenv from "dotenv";

dotenv.config();

test("generateAccessTokenByCode async", async () => {
  const tokenInfo = await AuthorizationService.generateAccessTokenByCode(
    "e5110e3c9c9f9ddae749f3c840a032f15f8373b9421032b445429b0fec84b2e2",
    process.env.CLIENT_ID as string,
    process.env.REDIRECT_URI as string,
    process.env.CLIENT_SECRET as string,
  );
  console.log(tokenInfo.accessToken);
  console.log(tokenInfo.createdAt);
});

test("generateAccessTokenByCode callback", () => {
  AuthorizationService.generateAccessTokenByCode(
    "1639715cf376b9c2c4b36dcd517e27a4c4d57bcf4d10686bf6c6a36452b60a3b",
    process.env.CLIENT_ID as string,
    process.env.REDIRECT_URI as string,
    process.env.CLIENT_SECRET as string,
    (err: any, data: TokenInfo | undefined) => {
      if (!err) {
        console.log(data?.accessToken);
        console.log(data?.refreshToken);
      }
    });
});

test("generateAccessTokenByPassword async", async () => {
  const tokenInfo: TokenInfo = await AuthorizationService.generateAccessTokenByPassword(
    process.env.EMAIL as string,
    process.env.PASSWORD as string,
    process.env.CLIENT_ID as string,
    process.env.CLIENT_SECRET as string
  );

  console.log(tokenInfo.accessToken);
  console.log(tokenInfo.createdAt);
});

test("generateAccessTokenByPassword callback", () => {
  AuthorizationService.generateAccessTokenByPassword(
    process.env.EMAIL as string,
    process.env.PASSWORD as string,
    process.env.CLIENT_ID as string,
    process.env.CLIENT_SECRET as string,
    (err: unknown, data: undefined | TokenInfo) => {
      if (!err) {
        console.log(data?.accessToken);
        console.log(data?.createdAt);
      }
    }
  )
});

test("refreshAccessToken async", async () => {
  const tokenInfo: TokenInfo = await AuthorizationService.refreshAccessToken(
    process.env.REFRESH_TOKEN as string
  );

  console.log(tokenInfo.accessToken);
  console.log(tokenInfo.createdAt);
});

test("refreshAccessToken callback", () => {
  AuthorizationService.refreshAccessToken(
    process.env.REFRESH_TOKEN as string,
    (err: unknown, data: undefined | TokenInfo) => {
      if (!err) {
        console.log(data?.accessToken);
        console.log(data?.createdAt);
      }
    }
  )
});