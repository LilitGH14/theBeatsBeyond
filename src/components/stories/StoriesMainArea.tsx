"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import { StoryType } from "@/types/types";
import PageHeader from "../common/PageHeader";
import StoryItem from "./StoryItem";
import { useSelector } from "react-redux";
import { fetchStoriesData } from "@/services/stories";

const StoriesMainArea = () => {
  const user = useSelector((store: any) => store.auth.user);
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary?.StoriesPage
  );

  const [storiesData, setStoriesData] = useState<StoryType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [slicedIndex, setSlicedIndex] = useState<number[]>([]);
  const [dict, setDict] = useState<{ [key: string]: string }>({});

  const changePage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  useEffect(() => {
    fetchStoriesData().then((res) => {
      if (res.ResponseCode == 200) {
        setStoriesData(res.ResponseData);
      }
    });
  }, []);

  useEffect(() => {
    setSlicedIndex([(currentPage - 1) * 12, currentPage * 12]);
  }, [currentPage]);

  return (
    <main>
      <PageHeader
        dict={dict}
        title="Stories_title"
        button={{ link: "/new-story", title: dict["Stories_btn"] }}
        user={user}
      />
      <section className="bb-story__area container">
        <div className="bb-border2">
          <div className="row">
            {storiesData.slice(...slicedIndex).map((item: StoryType) => (
              <div className="col-lg-2 col-md-6" key={item.id}>
                <StoryItem
                  id={item.id}
                  dict={dict}
                  date={item.date}
                  username={item.username}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <Pagination
              pagesCount={Math.ceil(storiesData.length / 12)}
              currentPage={currentPage}
              changeCurrentPage={changePage}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoriesMainArea;
