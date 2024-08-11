import { Filters, ResponseGeneralType } from "@/types/types";
import HttpClient from "./HttpClient";

export const fetchSongsByCategory: (
  category: string
) => Promise<ResponseGeneralType> = async (category) => {
  const response: ResponseGeneralType = await HttpClient.get(
    `/songs/category/${category}`
  );
  return response;
};

export const fetchSongsData: () => Promise<ResponseGeneralType> = async () => {
  const response: ResponseGeneralType = await HttpClient.get(`/songs`);
  return response;
};

export const fetchSongDataById: (
  id: number
) => Promise<ResponseGeneralType> = async (id: number) => {
  const response: ResponseGeneralType = await HttpClient.get(`/songs/${id}`);
  return response;
};

export const fetchFilteredSongData: (
  filters: Filters
) => Promise<ResponseGeneralType> = async (filters) => {
  const response: ResponseGeneralType = await HttpClient.post(``, filters);
  return response;
};

export const fetchComments: () => Promise<ResponseGeneralType> = async () => {
  const response: ResponseGeneralType = await HttpClient.get(
    `/assets/mock/comments.json`
  );
  return response;
};

export const generateNewSong: (
  lyrics: any
) => Promise<ResponseGeneralType> = async (lyrics) => {
  const response: ResponseGeneralType = await HttpClient.post(``, lyrics);
  return response;
};

export const saveNewSong: (song: any) => Promise<ResponseGeneralType> = async (
  song
) => {
  const response: ResponseGeneralType = await HttpClient.post(``, song);
  return response;
};
