import HttpClient from "@/services/HttpClient";
import { ResponseGeneralType } from "@/types/types";

export const fetchChooseUsData: () => Promise<ResponseGeneralType> =
  async () => {
    const response: ResponseGeneralType = await HttpClient.get(
      `/assets/mock/choose_us.json`
    );
    return response;
  };

export const fetchFaqData: () => Promise<ResponseGeneralType> = async () => {
  const response: ResponseGeneralType = await HttpClient.get(
    `/assets/mock/faq.json`
  );
  return response;
};
