"use client";
import Image from "next/image";
import React, { useState } from "react";
import { imageLoader } from "@/hooks/ImageLoader";
import { LangItem } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLanguage } from "@/redux/slices/generalSlice";
import { Languages } from "@/constants/constants";

const Language = () => {
  const dispatch = useDispatch();

  const dict = useSelector(
    (store: any) => store.general.dictionary?.Langauages
  );
  const selectedLanguage = useSelector(
    (store: any) => store.general.selectedLang
  );

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<LangItem>(
    Languages.find((f) => f.name == selectedLanguage) as LangItem
  );

  const toggleDropdown = (lang: LangItem) => {
    setSelectedLang(lang);
    setOpenDropdown(false);

    dispatch(setSelectedLanguage(lang.name));
  };

  return (
    <div className="language_wrapper">
      <div
        onClick={() => setOpenDropdown((prev) => !prev)}
        className="selected_lang_item_wrapper"
      >
        <Image
          loader={imageLoader}
          priority
          src={selectedLang?.src}
          alt={dict?.flag}
        />
        {dict?.[selectedLang?.name]}
      </div>
      <ul className={`languagepicker ${openDropdown ? "active" : ""}`}>
        {Languages.map((lang: LangItem) => {
          return (
            <li
              key={"flag" + lang.id}
              onClick={() => toggleDropdown(lang)}
              className="lang_item_wrapper"
            >
              <Image
                loader={imageLoader}
                priority
                src={lang?.src}
                alt={dict?.flag}
              />
              {dict?.[lang.name]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Language;
