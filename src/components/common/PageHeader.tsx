import Link from "next/link";
import React from "react";

type PageHeaderProps = {
  dict: any;
  imageSrc: string;
  title: string;
  description?: string;
  button?: { link: string; title: string };
};
const PageHeader = ({
  dict,
  imageSrc,
  title,
  description,
  button,
}: PageHeaderProps) => {
  return (
    <section className="bt-page-header-container fix">
      <div
        className="include__bg p-relative zindex-1 pt-70 pb-70"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10">
              <div className="bt-content text-center">
                <h2 className="bt-title mb-30">{dict?.[title] ?? title}</h2>
                {description && (
                  <p className="bt-description capitalize mb-65">
                    {dict?.[description] ?? description}
                  </p>
                )}
                {button && (
                  <Link href={button.link} className="add-story-btn">
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
