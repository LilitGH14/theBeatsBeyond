import React from "react";
import WorkBg from "../../../public/assets/img/bg/main-bg.jpg";

type BreadcrumbProps = {
  title: string | undefined;
};
const Breadcrumb = ({ title }: BreadcrumbProps) => {
  return (
    <section
      className="page-title-area page-title-spacing p-relative zindex-1"
      style={{ backgroundImage: `url(${WorkBg.src})` }}
    >
      <div className="bb-overlay ms-overlay8 p-absolute zindex--1"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <h3 className="bb-page-title text-center lh-1">{title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
