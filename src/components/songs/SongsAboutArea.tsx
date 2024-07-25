"use client";
import React from "react";
import NiceSelect from "../common/NiceSelect";
import { bannerFormSelect } from "../../data/nice-select-data";
import bg from "../../../public/assets/img/bg/main-bg.jpg";
import { Filters } from "@/types/types";

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
    <section className="bb-genres-area">
      <div
        className="bb-about-bg include__bg p-relative zindex-1 pt-130 pb-30"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="bb-overlay ms-overlay5 p-absolute zindex--1"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <div className="bb-about-content text-center">
                <h2 className="bb-title2 white-text mb-30">
                  {dict.Songs_title}
                </h2>
                <p className="capitalize mb-65">{dict.Songs_description}</p>
                <div className="bb-genres-search">
                  <div className="bb-banner__form two">
                    <form action="#">
                      <div className="bb-banner__from-inner two ms-bg-2 wrapper-nice-select">
                        <div className="bb-banner__form-select m-nice-select-2">
                          <NiceSelect
                            value={filters.generatedSong}
                            options={bannerFormSelect}
                            onChange={(ev) =>
                              selectHandler(ev, "generatedSong")
                            }
                            placeholder={dict.Select_song_type_placeholder}
                            name="generatedSong"
                          />
                        </div>
                        <div className="bb-banner__form-select m-nice-select-2">
                          <NiceSelect
                            value={filters.originalSong}
                            options={bannerFormSelect}
                            onChange={(ev) => selectHandler(ev, "originalSong")}
                            name="originalSong"
                            placeholder={
                              dict.Select_original_song_type_placeholder
                            }
                          />
                        </div>
                        <div className="banner__form-button">
                          <i className="flaticon-loupe"></i>
                          <input
                            defaultValue={filters?.searchValue ?? ""}
                            onChange={(ev) => selectHandler(ev, "searchValue")}
                            name="search"
                            placeholder={dict.Search_song_username_placeholder}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SongsAboutArea;
