import Link from "next/link";
import React from "react";
import bg from "../../../public/assets/img/bg/main-bg.jpg";

type PageHeaderProps = {
  dict: any;
  title: string;
  description?: string;
  button?: { link: string; title: string };
  user?: any;
};
const PageHeader = ({
  dict,
  title,
  description,
  button,
  user,
}: PageHeaderProps) => {
  return (
    <section
      className="bb-page-header__area fix"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="bb-page-header__inner include__bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 p-0">
              <div className="bb-page-header__content text-center">
                <h2 className="bb-page-header__content-title">
                  {dict?.[title] ?? title}
                </h2>
                {description && (
                  <p className="bb-page-header__content-description">
                    {dict?.[description] ?? description}
                  </p>
                )}
                {button && user && (
                  <Link
                    href={button.link}
                    className="bb-page-header__content-btn primary-filled-btn"
                  >
                    {button.title}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
