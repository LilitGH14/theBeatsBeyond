import HttpClient from "@/services/HttpClient";
import { ResponseGeneralType, StoryType } from "@/types/types";

export const fetchStoriesData: () => Promise<ResponseGeneralType> =
  async () => {
    const response: ResponseGeneralType = await HttpClient.get("/stories");
    return response;
  };

export const fetchStoryById: (
  id: number
) => Promise<ResponseGeneralType> = async (id: number) => {
  const response: ResponseGeneralType = await HttpClient.get(`/stories/${id}`);
  return response;
};

export const addStory: (
  story: Partial<StoryType>
) => Promise<ResponseGeneralType> = async (story) => {
  const response: ResponseGeneralType = await HttpClient.post(`/stories/create`, story);
  return response;
};
