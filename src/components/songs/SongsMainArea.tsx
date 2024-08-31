"use client";
import React, { useEffect, useState } from "react";
import SongsAboutArea from "./SongsAboutArea";
import SongsListingArea from "./SongsListingArea";
import { fetchFilteredSongData, fetchSongsData } from "@/services/songs";
import { Filters, SongType } from "@/types/types";
import { useSelector } from "react-redux";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SongsMainArea = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const dictSelector = useSelector(
    (store: any) => store.general.dictionary.SongsPage
  );

  const [dict, setDict] = useState<{ [key: string]: string }>({});
  const [songs, setSongs] = useState<SongType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [slicedIndex, setSlicedIndex] = useState<number[]>([]);
  const [filters, setFilters] = useState<Filters>({
    generatedSong: "",
    originalSong: "",
    searchValue: "",
  });

  const selectHandler = (
    ev: any,
    field: "generatedSong" | "originalSong" | "searchValue"
  ) => {
    const params = new URLSearchParams(searchParams);

    if (field === "searchValue" && ev.target.value.length > 2) {
      params.set(field, ev.target.value.toLowerCase()?.trim());

      setFilters({
        ...filters,
        [field]: ev.target.value,
      });

      fetchFilteredSongData(filters).then((res) => {
        if (res.ResponseCode == 200) {
          setSongs(res.ResponseData);
        }
      });
    } else {
      params.set(field, ev.optionName.toLowerCase());
      params.delete(
        field === "generatedSong" ? "originalSong" : "generatedSong"
      );

      const d = filters;
      filters[field] = ev.optionName.toLowerCase();
      filters[field === "generatedSong" ? "originalSong" : "generatedSong"] = "";
      console.log(d, 123)

      setFilters(d);

      fetchFilteredSongData(filters).then((res) => {
        if (res.ResponseCode == 200) {
          setSongs(res.ResponseData);
        }
      });
    }

    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    setFilters({
      searchValue: searchParams.get("searchValue") ?? "",
      generatedSong: searchParams.get("generatedSong") ?? "",
      originalSong: searchParams.get("originalSong") ?? "",
    });
  }, [searchParams]);

  useEffect(() => {
    fetchSongsData().then((res) => {
      if (res.ResponseCode == 200) {
        setSongs(res.ResponseData);
      }
    });
  }, []);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  useEffect(() => {
    setSlicedIndex([(currentPage - 1) * 12, currentPage * 12]);
  }, [currentPage]);

  return (
    <>
      <SongsAboutArea
        dict={dict}
        selectHandler={selectHandler}
        filters={filters}
      />
      <SongsListingArea
        dict={dict}
        resultCount={songs.length}
        pagesCount={Math.ceil(songs.length / 12)}
        songs={songs}
        currentPage={currentPage}
        changeCurrentPage={setCurrentPage}
        slicedIndex={slicedIndex}
      />
    </>
  );
};

export default SongsMainArea;
