//@refresh
"use client";
import React, { useEffect, useState } from "react";
import BacktoTop from "@/components/common/BacktoTop";
import UseGsapAnimation from "@/hooks/use-gsap-animation";
import Header from "./desktop/header/Header";
import Footer from "./desktop/footer/Footer";
import { useSelector } from "react-redux";
import { setTranslations } from "@/redux/slices/generalSlice";
import { useDispatch } from "react-redux";
import { isMobile } from "react-device-detect";
import MobileHeader from "./mobile/header/Header";
import MobileFooter from "./mobile/footer/Footer";
import MobileMenu from "./mobile-menu/MobileMenu";
import { LanguageProvider } from "@/dictionaries/dictionaries";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const dispatch = useDispatch();

  const selectedLang = useSelector((store: any) => store.general.selectedLang);

  const [dict, setDict] = useState<any>({});
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    LanguageProvider.getDictionary(selectedLang).then((res: any) => {
      dispatch(setTranslations(res));
      setDict(res);
    });
  }, [dispatch, selectedLang]);

  return (
    <>
      {isMobile ? (
        <MobileHeader dict={dict} toggle={toggle} />
      ) : (
        <Header dict={dict} />
      )}
      {isMobile && <MobileMenu open={open} dict={dict} />}
      <UseGsapAnimation>{children}</UseGsapAnimation>
      {isMobile ? (
        <MobileFooter dict={dict?.Footer} />
      ) : (
        <Footer dict={dict?.Footer} />
      )}
      <BacktoTop />
    </>
  );
};

export default Wrapper;
