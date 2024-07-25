"use client";
import React, { useEffect, useState } from "react";
import WorkArea from "./WorkArea";
import HomePageBanner from "./HomePageBanner";
import RunningLines from "./RunningLines";
import PopularArea from "./PopularArea";
import { useSelector } from "react-redux";
import SharedStoriesSection from "./SharedStoriesSection";

const HomeMainArea = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary?.HomePage
  );

  const [dict, setDict] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <main className="bb-home-area">
      <HomePageBanner dict={dict} />
      <RunningLines dict={dict} ordering={1} />
      <PopularArea dict={dict} />
      <WorkArea dict={dict} />
      <SharedStoriesSection dict={dict} />
    </main>
  );
};

export default HomeMainArea;
