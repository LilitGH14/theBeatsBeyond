"use client";
import React, { useEffect, useState } from "react";
import NavProfileTab from "./NavProfileTab";
import SongLyrics from "./SongLyrics";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { fetchSongDataById } from "@/services/songs";
import { useSelector } from "react-redux";
import { SongType } from "@/types/types";

const SongsDetailsMainArea = () => {
  const pathname = usePathname();

  const dictSelector = useSelector(
    (store: any) => store.general.dictionary.SongsPage
  );

  const [dict, setDict] = useState<{ [key: string]: string }>({});
  const [song, setSong] = useState<SongType>();

  useEffect(() => {
    const id = +(localStorage.getItem("song_id") as string);

    fetchSongDataById(id).then((res) => {
      if (res.ResponseCode == 200) {
        setSong(res.ResponseData);
      }
    });
  }, [pathname]);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <section className="bb-songs__item-details">
      <div className="container">
        <h3 className="bb-songs__item-details-title">Details</h3>
        <div className="row">
          <div className="col-lg-8">
            <NavProfileTab />
            <SongLyrics dict={dict} content={song?.lyrics} />
          </div>
          <Sidebar dict={dict} song={song as SongType} />
        </div>
      </div>
    </section>
  );
};

export default SongsDetailsMainArea;
