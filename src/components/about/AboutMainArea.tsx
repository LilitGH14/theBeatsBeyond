"use client";
import React, { useEffect, useState } from "react";
import ChooseUsArea from "./ChooseUsArea";
import FaqArea from "./FaqArea";
import PageHeader from "../common/PageHeader";
import Bg from "../../../public/assets/img/event/event-bg-4.jpg";
import { useSelector } from "react-redux";

const AboutMainArea = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary.About
  );

  const [dict, setDict] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <>
      <PageHeader
        dict={dict}
        imageSrc={Bg.src}
        title="Why_choose_us_title"
        description="Why_choose_us_text"
      />
      <ChooseUsArea dict={dict} />
      <FaqArea dict={dict} />
    </>
  );
};
export default AboutMainArea;
