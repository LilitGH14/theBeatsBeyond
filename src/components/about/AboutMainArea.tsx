"use client";
import React, { useEffect, useState } from "react";
import ChooseUsArea from "./ChooseUsArea";
import FaqArea from "./FaqArea";
import PageHeader from "../common/PageHeader";
import aboutBgImg from "../../../public/assets/img/about/about.jpg";
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
        imageSrc={aboutBgImg.src}
        title="About_title"
        description="About_text"
      />
      <ChooseUsArea dict={dict} />
      <FaqArea dict={dict} />
    </>
  );
};
export default AboutMainArea;
