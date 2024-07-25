import { ResponseGeneralType } from "@/types/types";
import HttpClient from "./HttpClient";

export const subscribeToNews: (
  email: string
) => Promise<ResponseGeneralType> = async (email) => {
  const response: ResponseGeneralType = await HttpClient.post(
    `/assets/mock/faq.json`,
    { email }
  );
  return response;
};

export const addComment: (feedback: {
  title: string;
  description: string;
}) => Promise<ResponseGeneralType> = async (feedback) => {
  const response: ResponseGeneralType = await HttpClient.post(``, feedback);
  return response;
};
