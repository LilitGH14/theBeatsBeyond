import { ResponseGeneralType } from "@/types/types";
import HttpClient from "./HttpClient";

export const fetchHowItWorksData: () => Promise<ResponseGeneralType> =
  async () => {
    const response: ResponseGeneralType = await HttpClient.get(
      `/assets/mock/how-it-works.json`
    );
    return response;
  };
