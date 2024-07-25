"use client";
import { imageLoader } from "@/hooks/ImageLoader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pagination from "../common/Pagination";
import { SongType } from "@/types/types";
import eventImg1 from "../../../public/assets/img/blog/story.jpg";

type SongsListingAreaProps = {
  dict: { [key: string]: string };
  resultCount: number;
  changeCurrentPage: (page: number) => void;
  currentPage: number;
  pagesCount: number;
  songs: SongType[];
  slicedIndex: number[];
};
const SongsListingArea = ({
  dict,
  resultCount,
  currentPage,
  pagesCount,
  changeCurrentPage,
  songs,
  slicedIndex,
}: SongsListingAreaProps) => {
  return (
    <div className="bb-genres-listing pb-110 ">
      <div className="container">
        <div className="bb-border2 pb-30 mb-20">
          <div className="row">
            <div className="col-sm-8">
              <div className="bb-genres-filter ms-genres-select ms-genres-nice-select">
                <span className="bb-genres-text">
                  {dict?.Results}({resultCount})
                </span>
              </div>
            </div>
            <div className="col-sm-4">
              <ul
                className="nav nav-tabs border-0 ms-genres-tab justify-content-sm-end d-none d-xl-flex"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    <span className="bb-genres-tab-bar">
                      <span></span>
                      <span></span>
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    <span className="bb-genres-tab-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabIndex={0}
          >
            <div className="row">
              {songs.slice(...slicedIndex).map((item) => (
                <div className="col-xl-6" key={item.id}>
                  <Link href={`/song-details/${item.id}`}>
                    <div className="bb-genres-item ms-genres-flex mb-25">
                      <div className="bb-genres-img ms-br-15">
                        <Image
                          src={eventImg1}
                          loader={imageLoader}
                          placeholder="blur"
                          loading="lazy"
                          style={{ width: "auto", height: "155px" }}
                          alt="genres img"
                        />
                        {item.videoUrl && (
                          <Link
                            className="popup-video ms-genres-video"
                            href={item.videoUrl}
                          >
                            <i className="fa-sharp fa-solid fa-play"></i>
                          </Link>
                        )}
                      </div>
                      <div className="bb-genres-content p-relative">
                        <h4 className="bb-genres-title">
                          {item.songGivenName}
                        </h4>
                        <p className="mb-30">{item.description}</p>
                        <div className="bb-fun-brand-bottom ms-genres-rating">
                          <div className="bb-fun-brand-rating">
                            <span>
                              {dict.Votes}: {item.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-xl-12">
                <Pagination
                  pagesCount={pagesCount}
                  currentPage={currentPage}
                  changeCurrentPage={changeCurrentPage}
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabIndex={0}
          >
            <div className="row">
              {songs.slice(...slicedIndex).map((item) => (
                <div className="col-xl-4 col-lg-6" key={item.id}>
                  <div className="bb-genres-item mb-25">
                    <div className="bb-genres-img ms-br-15 fix w-img mb-30">
                      <Link href={`/genres-details/${item.id}`}>
                        <Image
                          src={eventImg1}
                          loader={imageLoader}
                          placeholder="blur"
                          loading="lazy"
                          style={{ width: "100%", height: "auto" }}
                          alt="genres img"
                        />
                      </Link>
                      {item.videoUrl && (
                        <Link
                          className="popup-video ms-genres-video"
                          href={item.videoUrl}
                        >
                          <i className="fa-sharp fa-solid fa-play"></i>
                        </Link>
                      )}
                    </div>
                    <div className="bb-genres-content p-relative">
                      <h4 className="bb-genres-title">
                        <Link href={`/genres-details/${item.id}`}>
                          {item.songGivenName}
                        </Link>
                      </h4>
                      <p className="mb-30">{item.description}</p>
                      <div className="bb-fun-brand-bottom ms-genres-rating">
                        <div className="bb-fun-brand-rating">
                          <span>
                            {dict.Votes}: {item.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-xl-12">
                <Pagination
                  pagesCount={pagesCount}
                  currentPage={currentPage}
                  changeCurrentPage={changeCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongsListingArea;
