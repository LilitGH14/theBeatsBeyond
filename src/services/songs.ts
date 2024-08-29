import { Filters, ResponseGeneralType } from "@/types/types";
import HttpClient from "./HttpClient";

export const fetchSongsByCategory: () => Promise<ResponseGeneralType> =
  async () => {
    const response: ResponseGeneralType = await HttpClient.post(
      `/songs/byCategory`
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
  filter: Filters
) => Promise<ResponseGeneralType> = async (filter) => {
  const response: ResponseGeneralType = await HttpClient.post(
    `/songs/filter`,
    filter
  );
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
