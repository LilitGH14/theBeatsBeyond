"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import headerLogo from "../../../../public/assets/img/logo/big-logo.png";
import { useSelector } from "react-redux";

type HeaderType = {
  dict: { [key: string]: { [key: string]: string } } | null;
  toggle: () => void;
};
const MobileHeader = ({ dict, toggle }: HeaderType) => {
  const user = useSelector((store: any) => store.auth.user);

  const logout = () => {
    window.location.href = "/";
    localStorage.clear();
  };

  return (
    <header>
      <div className="bb-header__area_mobile">
        <div>
          <div role="button" onClick={toggle}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <Link href="/">
            <Image
              loader={imageLoader}
              priority
              width={143}
              height={45}
              src={headerLogo}
              alt={dict?.Header?.logo_img as string}
            />
          </Link>
        </div>
        {!user ? (
          <button onClick={logout} className="logout_btn">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            {dict?.Header?.Logout}
          </button>
        ) : (
          <div className="bb-header__auth-btns">
            <Link href="/login" className="signin">
              {dict?.Header?.Sign_in}
            </Link>
            <Link href="/signup" className="signup">
              {dict?.Header?.Sign_up}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
