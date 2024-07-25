"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../common/Breadcrumb";
import WorkSystemArea from "./WorkSystemArea";
import { useSelector } from "react-redux";

const WorkSystemMain = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary?.HowItWorksPage
  );

  const [dict, setDict] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <>
      <Breadcrumb title={dict?.How_it_works_title ?? "How it works"} />
      <WorkSystemArea dict={dict} />
    </>
  );
};

export default WorkSystemMain;
