import Link from "next/link";
import React from "react";
import FooterLogo from "../../../../public/assets/img/logo/logo.png";
import FooterBg from "../../../../public/assets/img/bg/main-bg.jpg";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";

type FooterType = {
  dict: { [key: string]: string } | null;
};
const Footer = ({ dict }: FooterType) => {
  return (
    <footer>
      <div
        className="bb-footer zindex-1 include__bg"
        style={{ backgroundImage: `url(${FooterBg.src})` }}
      >
        <div className="container">
          <div className="bb-footer-inner ms-br-100 ms-bg-4">
            <div className="row align-items-center">
              <div className="col-12 d-flex justify-content-center">
                <div className="bb-footer-logo m-img">
                  <Link href="/home-2">
                    <Image
                      src={FooterLogo}
                      loader={imageLoader}
                      placeholder="blur"
                      loading="lazy"
                      style={{ width: "100%", height: "auto" }}
                      alt={dict?.logo_img as string}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-lg-5 col-md-6">
              <div className="bb-footer-widget">
                <h3 className="bb-footer-title">{dict?.Get_in_touch}</h3>
                <div className="bb-footer-contact">
                  <ul>
                    <li>
                      <div className="bb-footer-social-inner">
                        <Link
                          href="https://www.linkedin.com/"
                          title="Instagram"
                          target="_blank"
                        >
                          {dict?.IN}
                        </Link>
                        <Link
                          href="https://twitter.com/"
                          title="Twitter"
                          target="_blank"
                        >
                          {dict?.TW}
                        </Link>
                        <Link
                          href="https://www.facebook.com/"
                          title="Facebook"
                          target="_blank"
                        >
                          {dict?.FB}
                        </Link>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-mail"></i>
                      <Link href="mailto:info@musiclycontact.com">
                        thebeats@beyond.contact.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-2 col-lg-2 col-md-6">
              <div className="bb-footer-widget">
                <h3 className="bb-footer-title">{dict?.Company}</h3>
                <ul>
                  <li>
                    <Link href="/about">{dict?.About_us}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{dict?.Contact_us}</Link>
                  </li>
                  <li>
                    <Link href="/terms-condition">{dict?.Terms_Policy}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2 col-lg-2 col-md-6">
              <div className="bb-footer-widget">
                <h3 className="bb-footer-title">{dict?.Genres}</h3>
                <ul>
                  <li>
                    <Link href="/songs?category=New">{dict?.New}</Link>
                  </li>
                  <li>
                    <Link href="/songs?category=Group">{dict?.Group}</Link>
                  </li>
                  <li>
                    <Link href="/songs?category=Duet">{dict?.Duet}</Link>
                  </li>
                  <li>
                    <Link href="/songs?category=Solo">{dict?.Solo}</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2 col-lg-3 col-md-6">
              <div className="bb-footer-widget">
                <h3 className="bb-footer-title">{dict?.Country_we_serve}</h3>
                <ul>
                  <li>{dict?.US}</li>
                  <li>{dict?.Canada}</li>
                  <li>{dict?.South_Korea}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-center">
          <div className="bb-footer-copy">
            <span>{dict?.All_Rights_Reserved}</span>
            <span>©</span>
            <span>The Beats Beyond 2024 v3</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
