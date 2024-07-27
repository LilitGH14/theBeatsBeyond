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
    <div className="container">
      <div className="bb-songs__border">
        <div className="row">
          <div className="col-lg-12">
            <span className="bb-songs__result-count">
              {dict?.Results}({resultCount})
            </span>
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="tab1-pane"
          role="tabpanel"
          aria-labelledby="tab1"
        >
          <div className="row">
            {songs.slice(...slicedIndex).map((item) => (
              <div className="col-xl-6" key={item.id}>
                <Link href={`/song-details/${item.id}`}>
                  <div className="bb-songs__item">
                    <div className="bb-songs__item-img">
                      <Image
                        src={eventImg1}
                        loader={imageLoader}
                        placeholder="blur"
                        loading="lazy"
                        style={{ width: "auto" }}
                        alt="genres img"
                      />
                    </div>
                    <div className="bb-songs__item-content">
                      <div>
                        <h4 className="bb-songs__item-content-title">
                          {item.songGivenName}
                        </h4>
                        <p className="bb-songs__item-content-subtitle">
                          {item.description}
                        </p>
                      </div>
                      <div className="bb-songs__item-content-rating">
                        <span>
                          {dict.Votes}: {item.rating}
                        </span>
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
      </div>
    </div>
  );
};

export default SongsListingArea;
