import { Avatar, Category, LangItem, TWorkFuture } from "@/types/types";
import enFlag from "../../public/assets/img/flags/en.png";
import koFlag from "../../public/assets/img/flags/ko.png";
import WorkFutureSvgIconOne from "../../public/assets/img/svg/quill_and_ink.png";
import WorkFutureSvgIconTwo from "../../public/assets/img/svg/hand-holding-heart.png";
import WorkFutureSvgIconThree from "../../public/assets/img/svg/3.png";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Latest",
  },
  {
    id: 2,
    name: "Popular",
  },
  {
    id: 3,
    name: "Inspired",
  }
];

export const Languages: LangItem[] = [
  {
    id: "en_lang",
    name: "en",
    src: enFlag,
  },
  {
    id: "ko_lang",
    name: "ko",
    src: koFlag,
  },
];

export const WORFEATURES: TWorkFuture[] = [
  {
    id: 1,
    icon: WorkFutureSvgIconOne,
    title: "How_it_works_feature_1_title",
    description: "How_it_works_feature_1_description",
  },
  {
    id: 2,
    icon: WorkFutureSvgIconTwo,
    title: "How_it_works_feature_2_title",
    description: "How_it_works_feature_2_description",
  },
  {
    id: 3,
    icon: WorkFutureSvgIconThree,
    title: "How_it_works_feature_3_title",
    description: "How_it_works_feature_3_description",
  },
];

export const TAG_OPTIONS = [
  { id: 1, optionName: "afraid" },
  { id: 2, optionName: "scared" },
  { id: 3, optionName: "angry" },
  { id: 4, optionName: "bad" },
  { id: 5, optionName: "confused" },
  { id: 6, optionName: "excited" },
  { id: 7, optionName: "fine" },
  { id: 8, optionName: "happy" },
  { id: 9, optionName: "inlove" },
  { id: 10, optionName: "hurt" },
  { id: 11, optionName: "sad" },
  { id: 12, optionName: "upset" },
  { id: 13, optionName: "worried" },
];

type TNiceSelectData = {
  id: number;
  optionName: string;
};
export const bannerFormSelect: TNiceSelectData[] = [
  {
    id: 1,
    optionName: "Band/Group",
  },
  {
    id: 2,
    optionName: "Duet",
  },
  {
    id: 3,
    optionName: "Solo",
  },
  {
    id: 4,
    optionName: "New",
  },
  {
    id: 5,
    optionName: "Popular",
  },
];

