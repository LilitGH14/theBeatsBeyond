"use client";
import HomeMainArea from "@/components/home/HomeMainArea";
import Wrapper from "@/layout/DefaultWrapper";
import { appWithTranslation } from "next-i18next";

const Home = () => {
  return (
    <Wrapper>
      <HomeMainArea />
    </Wrapper>
  );
};

export default appWithTranslation(Home);
