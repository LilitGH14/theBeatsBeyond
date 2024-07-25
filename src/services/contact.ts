import { ContactMail, ResponseGeneralType } from "@/types/types";
import HttpClient from "./HttpClient";

export const sendMessageFromContact: (
  mail: ContactMail
) => Promise<ResponseGeneralType> = async (mail) => {
  const response: ResponseGeneralType = await HttpClient.post(``, mail);
  return response;
};
