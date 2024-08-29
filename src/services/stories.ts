import HttpClient from "@/services/HttpClient";
import { ResponseGeneralType, StoryType } from "@/types/types";

export const fetchStoriesData: () => Promise<ResponseGeneralType> =
  async () => {
    const response: ResponseGeneralType = await HttpClient.get("/stories");
    return response;
  };

export const fetchStoriesDataByLimit: (
  limit: number
) => Promise<ResponseGeneralType> = async (limit = 6) => {
  const response: ResponseGeneralType = await HttpClient.post("/stories", {
    limit,
  });
  return response;
};

export const fetchStoriesByCategoryData: (
  category: "Latest" | "Popular" | "Inspired"
) => Promise<ResponseGeneralType> = async (
  category: "Latest" | "Popular" | "Inspired"
) => {
  const response: ResponseGeneralType = await HttpClient.post(
    "/stories/byCategory",
    { category }
  );
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
  const response: ResponseGeneralType = await HttpClient.post(
    `/stories/create`,
    story
  );
  return response;
};
