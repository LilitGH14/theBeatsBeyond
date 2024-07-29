"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { StoryDetailsType } from "@/types/types";
import PageHeader from "../common/PageHeader";
import Bg from "../../../public/assets/img/event/event-bg-4.jpg";
import StoryDetailsSidebar from "./StoryDetailsSidebar";
import { useSelector } from "react-redux";
import { fetchStoryById } from "@/services/stories";

const StoryDetailsMain = () => {
  const pathname = usePathname();

  const dictSelector = useSelector(
    (store: any) => store.general?.dictionary?.StoriesPage
  );

  const [dict, setDict] = useState<{ [key: string]: string }>({});
  const [story, setStory] = useState<StoryDetailsType>({
    id: 0,
    title: "",
    username: "",
    date: "",
    tags: [],
    description: null,
  });

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  useEffect(() => {
    const id = +(localStorage.getItem("story_id") as string);

    fetchStoryById(id).then((res) => {
      if (res.ResponseCode == 200) {
        setStory(res.ResponseData);
      }
    });
  }, [pathname]);

  return (
    <main>
      <PageHeader imageSrc={Bg.src} title={story?.title} dict={dict} />
      <section className="bb-story__details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <div className="bb-story__details-content">
                <div
                  dangerouslySetInnerHTML={{ __html: story.description }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <StoryDetailsSidebar dict={dict} story={story} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoryDetailsMain;
