"use client";
import React from "react";
import bannerBg from "../../../public/assets/img/banner/banner-thumb-01.jpg";
import Link from "next/link";

type HomePageBannerProps = {
  dict: { [key: string]: string } | null;
};
const HomePageBanner = ({ dict }: HomePageBannerProps) => {
  return (
    <section className="bb-banner-area p-relative">
      <div className="container-fluid ms-maw-1710">
        <div
          className="bb-banner-area-container"
          style={{ backgroundImage: `url(${bannerBg.src})` }}
        >
          <div className="container">
            <div className=" bb-banner-area-container-inner">
              <div className="col-xl-11">
                <div className="bb-banner__main-wrapper">
                  <div className="bb-banner__content text-center">
                    <h1 className="bb-banner__bg-title">
                      {dict?.Home_page_title}
                    </h1>
                    <h2 className="bb-banner__title msg_title bd-title-anim">
                      {dict?.Home_page_description}
                    </h2>
                    <div className="bb-banner_btns_wrapper">
                      <Link
                        className="unfill__btn feature-unfill_btn"
                        href="/songs"
                      >
                        {dict?.Leave_story_btn}
                      </Link>
                      {/* <Link
                        className="unfill__btn feature-unfill_btn"
                        href="/songs"
                      >
                        {dict?.Remix_song_btn}
                      </Link> */}
                    </div>
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

export default HomePageBanner;
