import HttpClient from "@/services/HttpClient";
import { ResponseGeneralType } from "@/types/types";

export const savePayment: (
  paymentInfo: any
) => Promise<ResponseGeneralType> = async (paymentInfo) => {
  const response: ResponseGeneralType = await HttpClient.post(``, paymentInfo);
  return response;
};
