"use server";
import { cookies } from "next/headers";

export const createTokenCookie = async (
  accessToken: string,
  refreshToken: string,
) => {
  const cookieAccessToken = cookies().set("accessToken", accessToken, {
    maxAge: 60 * 60 * 24,
  }); // 1 day
  const cookieRefreshToken = cookies().set("refreshToken", refreshToken, {
    maxAge: 60 * 60 * 24,
  });
  return {
    accessToken: cookieAccessToken.toString(),
    refreshToken: cookieRefreshToken.toString(),
  };
};
