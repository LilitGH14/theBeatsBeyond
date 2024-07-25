import { Avatar, Category, LangItem, TWorkFuture } from "@/types/types";
import enFlag from "../../public/assets/img/flags/en.png";
import koFlag from "../../public/assets/img/flags/ko.png";
import WorkFutureSvgIconOne from "../../public/assets/img/svg/WorkFutureIconOne";
import WorkFutureSvgIconTwo from "../../public/assets/img/svg/WorkFutureSvgIconTwo";
import WorkFutureSvgIconThree from "../../public/assets/img/svg/WorkFutureSvgIconThree";
import avatar1 from "../../public/assets/img/avatars/hope.jpg";
import avatar2 from "../../public/assets/img/avatars/jimin.jpg";
import avatar3 from "../../public/assets/img/avatars/jin.jpg";
import avatar4 from "../../public/assets/img/avatars/kook.jpg";
import avatar5 from "../../public/assets/img/avatars/rm.jpg";
import avatar6 from "../../public/assets/img/avatars/suga.jpg";
import avatar7 from "../../public/assets/img/avatars/v.jpg";
import WorkFutureIconOne from "../../public/assets/img/svg/WorkFutureIconOne";
import WorkFutureSvgIconFour from "../../public/assets/img/svg/WorkFutureSvgIconFour";

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
    icon: <WorkFutureSvgIconOne />,
    title: "How_it_works_feature_1_title",
    description: "How_it_works_feature_1_description",
  },
  {
    id: 2,
    icon: <WorkFutureSvgIconThree />,
    title: "How_it_works_feature_2_title",
    description: "How_it_works_feature_2_description",
  },
  {
    id: 3,
    icon: <WorkFutureSvgIconTwo />,
    title: "How_it_works_feature_3_title",
    description: "How_it_works_feature_3_description",
  },
];

export const AVATARS: Avatar[] = [
  {
    id: "avatar1",
    src: avatar1,
  },
  {
    id: "avatar2",
    src: avatar2,
  },
  {
    id: "avatar3",
    src: avatar3,
  },
  {
    id: "avatar4",
    src: avatar4,
  },
  {
    id: "avatar5",
    src: avatar5,
  },
  {
    id: "avatar6",
    src: avatar6,
  },
  {
    id: "avatar7",
    src: avatar7,
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

