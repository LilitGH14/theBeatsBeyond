"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import errorImg from "../../../public/assets/img/error/404.png";
import { useSelector } from "react-redux";

const ErrorMessage = () => {
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
        <div className="row wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-12">
            <div className="bt-error-wrapper fade_bottom">
              <div className="bt-error-thumb">
                <Image
                  src={errorImg}
                  alt={dict?.Error_Image_Alt ?? "Page not found"}
                />
              </div>
              <div className="bt-error-content">
                <h3>{dict?.Error_404}</h3>
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

export default ErrorMessage;
