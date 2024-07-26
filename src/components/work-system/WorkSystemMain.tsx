"use client";
import React, { useEffect, useState } from "react";
import WorkSystemArea from "./WorkSystemArea";
import { useSelector } from "react-redux";
import PageHeader from "../common/PageHeader";
import Bg from "../../../public/assets/img/event/event-bg-4.jpg";

const WorkSystemMain = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary?.HowItWorksPage
  );

  const [dict, setDict] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <main>
      <PageHeader
        dict={dict}
        imageSrc={Bg.src}
        title="How_it_works"
        button={{
          link: "/new-story",
          title: dict?.["Stories_btn"] ?? "Leave a story",
        }}
      />
      <WorkSystemArea dict={dict} />
    </main>
  );
};

export default WorkSystemMain;
