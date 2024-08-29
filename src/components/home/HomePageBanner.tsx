"use client";
import React from "react";
import bannerBg from "../../../public/assets/img/banner/banner-thumb-01.jpg";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { modalService } from "@/services/modal";

type HomePageBannerProps = {
  dict: { [key: string]: string } | null;
};
const HomePageBanner = ({ dict }: HomePageBannerProps) => {
  const { replace } = useRouter();

  const user = useSelector((store: any) => store.auth.user);

  const openWarningModal = () => {
    modalService.openModal({
      children: <h6>Please log in to continue</h6>,
      title: "Warning",
      className: "sm",
    });
    document.body.setAttribute("style", "overflow:hidden");
  };

  const redirectToNewStoryPage = () => {
    user ? replace("/new-story") : openWarningModal();
  };

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
                      <button
                        className="unfill__btn feature-unfill_btn"
                        onClick={redirectToNewStoryPage}
                      >
                        {dict?.Leave_story_btn}
                      </button>
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
