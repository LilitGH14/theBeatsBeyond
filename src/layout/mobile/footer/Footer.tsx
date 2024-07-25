import Link from "next/link";
import React from "react";
import FooterLogo from "../../../../public/assets/img/logo/logo.png";
import usFlag from "../../../../public/assets/img/flags/us.jpeg";
import canadaFlag from "../../../../public/assets/img/flags/canada.png";
import koreaFlag from "../../../../public/assets/img/flags/korea.png";
import FooterBg from "../../../../public/assets/img/bg/main-bg.jpg";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";

type FooterType = {
  dict: { [key: string]: string } | null;
};
const MobileFooter = ({ dict }: FooterType) => {
  return (
    <footer
      className="bb-footer_mobile"
      style={{ backgroundImage: `url(${FooterBg.src})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 logo_container">
            <Link href="/">
              <Image
                src={FooterLogo}
                loader={imageLoader}
                placeholder="blur"
                loading="lazy"
                alt={dict?.logo_img as string}
                className="logo"
              />
            </Link>
          </div>
          <div className="col-12 bb-footer-social">
            <div>
              <Link
                href="https://www.linkedin.com/"
                title="Instagram"
                target="_blank"
              >
                {dict?.IN}
              </Link>
              <Link href="https://twitter.com/" title="Twitter" target="_blank">
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
          </div>
          <div className="col-12">
            <div className="bb-footer-widget">
              <h3 className="bb-footer-title">{dict?.Get_in_touch}</h3>
              <div className="bb-footer-contact">
                <ul>
                  <li>
                    <i className="flaticon-pin"></i>
                    {dict?.Address}
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
          <div className="col-12">
            <div className="bb-footer-widget">
              <h3 className="bb-footer-title">{dict?.Country_we_serve}</h3>
              <div className="row served_container">
                <div className="flag">
                  <Image
                    src={koreaFlag}
                    loader={imageLoader}
                    placeholder="blur"
                    loading="lazy"
                    alt={dict?.flag_img as string}
                  />
                </div>
                <div className="flag">
                  <Image
                    src={usFlag}
                    loader={imageLoader}
                    placeholder="blur"
                    loading="lazy"
                    alt={dict?.flag_img as string}
                  />
                </div>
                <div className="flag">
                  <Image
                    src={canadaFlag}
                    loader={imageLoader}
                    placeholder="blur"
                    loading="lazy"
                    alt={dict?.flag_img as string}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="column">
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
          <div className="col-6">
            <div className="column">
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
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
