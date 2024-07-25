import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
// context api data type
export type AppContextType = {
  niceSelectData: string;
  setNiceSelectData: React.Dispatch<React.SetStateAction<string>>;
};

//brand data type
export type TBrand = {
  id: number;
  songNum: string;
  image: StaticImageData;
  songTitle: string;
  songText: string;
};
//text-scroll-type
export type TScroll = {
  title: string;
  color?: string;
};
//Popular categores type
export type TPopularData = {
  id: number;
  image: StaticImageData;
  title: string;
};

//work-future-type
export type TWorkFuture = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
};
//trending genres data type
export type TTrendingGenres = {
  id: number;
  image: StaticImageData;
  serialNumber?: string;
  price: number;
  title: string;
  subTitle: string;
  description: string;
  shapeImg?: StaticImageData;
};
//Popular bands data type
export type TPopularBands = {
  id: number;
  image: StaticImageData;
  title: string;
  subTitle: string;
  locationName: string;
  rating: number;
};

//special event data type
export type TSpecialEvent = {
  id: number;
  title: string;
  description: string;
  locationName: string;
  eventDate: string;
  wrapperClass?: string;
};
//news type data
export type TLetestNews = {
  id: number;
  category: string;
  image: StaticImageData;
  title: string;
  description: string;
  date: string;
  month?: string;
  locationName?: string;
  comment: number;
  videoUrl?: string;
};
//future partner data
export type TFuturePartner = {
  id: number;
  image: StaticImageData;
};
//testimonial data type
export type TTestimonialData = {
  id: number;
  signatureImg?: StaticImageData;
  image?: StaticImageData;
  description: string;
  authorName: string;
  title?: string;
  designation?: string;
};
//testimonial image type
export type TImageData = {
  id: number;
  wrapperClass: string;
  image: StaticImageData;
};
//Team data type
type TSocial = {
  url: string;
  title: string;
  name: string;
};
export type TTeamData = {
  id: number;
  image: StaticImageData;
  name: string;
  socialIcon: TSocial[];
  desination?: string;
};
//Genres data type
export type TGenresListing = {
  id: number;
  image: StaticImageData;
  price?: number;
  videoUrl?: string;
  title: string;
  description: string;
  mapLink: string;
  location?: string;
  ratings: number;
  ratingNum?: number;
  activeClass?: string;
  date?: string;
  wrapperBorderClass?: string;
  musicName?: string;
};
// id type
export type idType = {
  id?: number;
};
//Ideas Advice data type
export type TIdeasAdvice = {
  id: number;
  image: StaticImageData;
  title: string;
};

// product type
export type ProductsType = {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
  quantity: number;
  discount?: number;
};

// newssssssssssssssssssss********************************
export type DictionaryType = {
  [key: string]: { [key: string]: string } | string;
};

export type ResponseGeneralType = {
  ResponseCode: number;
  ResponseData: any;
};

export type ChooseUsDataType = {
  id: number;
  icon: string;
  serialNum: string;
  title: string;
  text: string;
};

export type FaqItemType = {
  collapse_id: string;
  id: string;
  question: string;
  answer: string;
};

export type StoryType = {
  id: number;
  username: string;
  title: string;
  description: string;
  date: string;
  votedCount: number;
  category:string;
};

export type StoryDetailsType = {
  id: number;
  tags: string[];
  username: string;
  title: string;
  description: any;
  date: string;
};

export type InstructionType = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type SongType = {
  id: number;
  videoUrl: string;
  songGivenName: string;
  description: string;
  isGenerated: boolean;
  songName: string;
  username: string;
  category: string;
  rating: number;
  isShared: boolean;
  tags: string[];
  duration:string;
  lyrics: { [key: string]: { [key: string]: string[] } };
};

export type LangItem = {
  id: string;
  name: string;
  src: StaticImageData;
};

export type Category = {
  id: number;
  name: string;
};

export type PopularCategory = {
  id: number;
  image: string;
  title: string;
  category: string;
};

export type CommentItem = {
  id: number;
  description: string;
  authorName: string;
  title: string;
};

export type Filters = {
  generatedSong: string;
  originalSong: string;
  searchValue: string;
};

export type OptionType = {
  id: number;
  optionName: string;
};

export type Avatar = {
  id: string;
  src: StaticImageData;
};

export type ContactMail = {
  name: string;
  email: string;
  number: string;
  subject: string;
  massage: string;
};
