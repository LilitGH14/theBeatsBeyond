import HttpClient from "@/services/HttpClient";
import { ResponseGeneralType } from "@/types/types";

export const loginUser: (user: any) => Promise<ResponseGeneralType> = async (
  user
) => {
  const response: ResponseGeneralType = await HttpClient.post(`/auth/login`, {
    email: user.email,
    password: user.password,
  });
  return response;
};

export const registerUser: (user: any) => Promise<ResponseGeneralType> = async (
  user
) => {
  const response: ResponseGeneralType = await HttpClient.post(
    `/auth/register`,
    {
      role: user.role,
      email: user.email,
      password: user.password,
      username: user.username,
    }
  );

  return response;
};

export const sendMail: (user: any) => Promise<ResponseGeneralType> = async (
  user
) => {
  const response: ResponseGeneralType = await HttpClient.post(``, { user });
  return response;
};
