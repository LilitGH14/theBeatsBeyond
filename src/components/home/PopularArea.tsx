"use client";
import { imageLoader } from "@/hooks/ImageLoader";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import { SongType } from "@/types/types";
import storyBgImage from "../../../public/assets/img/categories/song-card-bg.jpeg";
import { fetchSongsData } from "@/services/songs";
import Ratting from "../common/Rating";

type PopularAreaProps = {
  dict: { [key: string]: string } | null;
};
const PopularArea = ({ dict }: PopularAreaProps) => {
  const [songsArr, setSongsArr] = useState<SongType[][]>([]);

  const seeStoryDetails = (id: number) => {
    localStorage.setItem("song_id", id.toString());
  };

  useEffect(() => {
    fetchSongsData().then((res) => {
      if (res.ResponseCode == 200) {
        let songs = [];

        for (let i = 0; i < Math.ceil(res.ResponseData.length / 7); i++) {
          songs.push(res.ResponseData.slice(i * 7, i * 7 + 7));
        }

        setSongsArr(songs);
      }
    });
  }, []);

  return (
    <section className="bb-popular__area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="section__title-wrapper bd-title-anim">
              <h2 className="section__title msg_title">
                <span className="active">{dict?.Latest_songs}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row bb-popular__stories">
          <div className="col-sm-12">
            <div className="bb-popular-active fix">
              <Swiper
                modules={[Autoplay]}
                loop={false}
                spaceBetween={25}
                autoplay={{
                  delay: 0,
                }}
                speed={6000}
                observeParents={true}
                observer={true}
                breakpoints={{
                  1200: {
                    slidesPerView: 7,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 2,
                  },
                }}
              >
                {songsArr.map((songs: SongType[], i: number) => (
                  <div key={i + "home_song_swiper"}>
                    {songs.map((song: SongType) => (
                      <SwiperSlide key={song.id}>
                        <Link href={`/song-details`}>
                          <div
                            className="bb-popular__item p-relative"
                            role="button"
                            onClick={() => seeStoryDetails(song.id)}
                          >
                            <div className="bb-popular__thumb">
                              <Image
                                loader={imageLoader}
                                placeholder="blur"
                                loading="lazy"
                                style={{ width: "100%", height: "auto" }}
                                src={storyBgImage}
                                alt={dict?.CategoryImageAlt as string}
                              />
                              <div className="bb-popular__content">
                                <h4 className="bb-popular__title">
                                  {song.songGivenName}
                                </h4>
                                <span>
                                  <Ratting averageRating={song.rate} />
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </div>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularArea;
