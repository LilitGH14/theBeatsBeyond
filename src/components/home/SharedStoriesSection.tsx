"use client";
import { imageLoader } from "@/hooks/ImageLoader";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { StoryType } from "@/types/types";
import image1 from "../../../public/assets/img/categories/story.jpg";
import { fetchStoriesDataByLimit } from "@/services/stories";

type SharedSongsSectionProps = {
  dict: { [key: string]: string } | null;
};
const SharedStoriesSection = ({ dict }: SharedSongsSectionProps) => {
  const [sharedStories, setSharedStories] = useState<StoryType[]>([]);

  const openSongDetails = (id: number) => {
    localStorage.setItem("song_id", id.toString());
  };

  useEffect(() => {
    fetchStoriesDataByLimit(6).then((res) => {
      if (res.ResponseCode == 200) {
        setSharedStories(res.ResponseData);
      }
    });
  }, []);

  return (
    <section className="bb-shared__area">
      <div className="row justify-content-center bdFadeUp">
        <div className="col-xl-7">
          <div className="section__title-wrapper text-center bd-title-anim">
            <span className="section__subtitle">
              {dict?.Inspired_story_title}
            </span>
            <h2 className="section__title">
              {dict?.Inspired_story_description}
            </h2>
          </div>
        </div>
      </div>
      <div className="bb-shared__content-space bdFadeUp">
        <div className="bb-shared__content-space-inner">
          {sharedStories.map((item: StoryType) => (
            <div className="bb-shared__content-space-inner-item" key={item.id}>
              <Link href={`/story-details`} className="row">
                <div
                  className="thumb"
                  role="button"
                  onClick={() => openSongDetails(item.id)}
                >
                  <Image
                    loader={imageLoader}
                    placeholder="blur"
                    loading="lazy"
                    style={{ width: "100%", height: "auto" }}
                    src={image1}
                    alt={dict?.AvatarAlt ?? ""}
                  />
                  <div className="content">
                    <h5 className="content-title">{item.title}</h5>
                    <span className="content-subtitle"> {item.username}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SharedStoriesSection;
