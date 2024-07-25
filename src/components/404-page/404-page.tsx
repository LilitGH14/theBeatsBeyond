"use client";
import React, { useEffect, useState } from "react";
import errorImg from "../../../public/assets/img/error/404.png";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const F0fpage = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary.ErrorMessage
  );

  const [dict, setDict] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <main className="bt-error-container">
      <div className="container">
        <div className="row fadeInUp" data-wow-delay="0.3s">
          <div className="col-12">
            <div className="bt-error-wrapper fade_bottom">
              <div className="bt-error-thumb">
                <Image
                  src={errorImg}
                  alt={dict?.Error_Image_Alt ?? "404 page image"}
                />
              </div>
              <div className="bt-error-content">
                <h4 className="bt-error-content-subtitle">
                  {dict?.Page_Not_Found}
                </h4>
                <div className="unfill__btn feature-unfill_btn">
                  <Link href="/" className="border-btn">
                    {dict?.Back_To_Home}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default F0fpage;
