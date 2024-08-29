"use client";
import React from "react";
import NiceSelect from "../common/NiceSelect";
import bg from "../../../public/assets/img/bg/category-bg.jpg";
import { Filters } from "@/types/types";
import { bannerFormSelect } from "@/constants/constants";

type SongsAboutAreaProps = {
  filters: Filters;
  dict: { [key: string]: string };
  selectHandler: (
    ev: any,
    field: "generatedSong" | "originalSong" | "searchValue"
  ) => void;
};
const SongsAboutArea = ({
  filters,
  dict,
  selectHandler,
}: SongsAboutAreaProps) => {
  return (
    <section className="bb-songs__area">
      <div
        className="bb-songs__bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="bb-overlay ms-overlay5 p-absolute zindex--1"></div>
        <div className="container bb-songs__content">
          <h2 className="bb-songs__title">{dict.Songs_title}</h2>
          <form action="#" className="row">
            <div className="bb-songs__select col-lg-4">
              <NiceSelect
                value={filters.generatedSong}
                options={bannerFormSelect}
                onChange={(ev) => selectHandler(ev, "generatedSong")}
                placeholder={dict.Select_song_type_placeholder}
                name="generatedSong"
              />
            </div>
            <div className="bb-songs__select col-lg-4">
              <NiceSelect
                value={filters.originalSong}
                options={bannerFormSelect}
                onChange={(ev) => selectHandler(ev, "originalSong")}
                name="originalSong"
                placeholder={dict.Select_original_song_type_placeholder}
              />
            </div>
            <div className="bb-songs__search col-lg-4">
              <i className="flaticon-loupe"></i>
              <input
                defaultValue={filters?.searchValue ?? ""}
                onChange={(ev) => selectHandler(ev, "searchValue")}
                name="search"
                placeholder={dict.Search_song_username_placeholder}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SongsAboutArea;
