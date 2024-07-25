"use client";
import { imageLoader } from "@/hooks/ImageLoader";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import { CATEGORIES } from "@/constants/constants";
import { Category, StoryType } from "@/types/types";
import storyBgImage from "../../../public/assets/img/blog/story.jpg";
import { fetchStoriesData } from "@/services/stories";

type PopularAreaProps = {
  dict: { [key: string]: string } | null;
};
const PopularArea = ({ dict }: PopularAreaProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Latest");
  const [stories, setStories] = useState<StoryType[]>([]);

  const changeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchStoriesData().then((res) => {
      if (res.ResponseCode == 200) {
        setStories(res.ResponseData);
      }
    });
  }, [selectedCategory]);

  return (
    <section className="bb-popular__area">
      <div className="container-fluid">
        <div className="row align-items-end bdFadeUp">
          <div className="col-xl-6 col-lg-6">
            <div className="section__title-wrapper bd-title-anim">
              <h2 className="section__title msg_title">
                <span className="active">{dict?.Categories}</span>
              </h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="bb-popular__tab ms-popular-flex">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  {CATEGORIES.map((category: Category) => {
                    return (
                      <button
                        className={`nav-link
                        ${selectedCategory === category.name ? "active" : ""}`}
                        id={`nav-popular-${category.id}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#nav-popular-${category.id}`}
                        type="button"
                        role="tab"
                        aria-controls={`nav-popular-${category.id}`}
                        aria-selected={selectedCategory === category.name}
                        onClick={() => changeCategory(category.name)}
                        key={category.id}
                      >
                        {dict?.[category.name]}
                      </button>
                    );
                  })}
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="row bdFadeUp bb-popular__stories">
          <div className="col-sm-12">
            <div className="tab-content" id="nav-tabContent">
              {CATEGORIES.map((category: Category) => {
                return (
                  <div
                    key={category.id}
                    className={`tab-pane fade ${
                      selectedCategory === category.name ? "show active" : ""
                    }`}
                    id={`nav-popular-${category.id}`}
                    role="tabpanel"
                    aria-labelledby={`nav-popular-${category.id}-tab`}
                    tabIndex={0}
                  >
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
                        {stories.map((story: StoryType) => (
                          <SwiperSlide key={story.id}>
                            <Link
                              href={`/songs?category=${story.category?.toLowerCase()}`}
                            >
                              <div className="bb-popular__item p-relative">
                                <div className="bb-popular__thumb">
                                  <Image
                                    loader={imageLoader}
                                    placeholder="blur"
                                    loading="lazy"
                                    style={{ width: "100%", height: "auto" }}
                                    src={storyBgImage}
                                    alt={dict?.CategoryImageAlt as string}
                                  />
                                  <h4 className="bb-popular__title">
                                    {story.title}
                                  </h4>
                                </div>
                              </div>
                            </Link>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularArea;
