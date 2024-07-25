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
    const id = +pathname.split("/")[pathname.split("/").length - 1];

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
    <section className="bb-song__details">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-xl-7">
            <div
              className="nav nav-tabs ms-tab-button border-0 ms-border2-btn ms-tab-prevent"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link prevent active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                {dict.Lyrics}
              </button>
              <button
                className="nav-link prevent"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                {dict.Listen}
              </button>
            </div>
            <div className="tab-content" id="nav-tabContent2">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabIndex={0}
              >
                <SongLyrics dict={dict} content={song?.lyrics} />
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabIndex={0}
              >
                <NavProfileTab />
              </div>
            </div>
          </div>
          <Sidebar dict={dict} song={song as SongType} />
        </div>
      </div>
    </section>
  );
};

export default SongsDetailsMainArea;
