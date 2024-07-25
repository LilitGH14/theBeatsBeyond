"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import headerLogo from "../../../../public/assets/img/logo/big-logo.png";
import { useSelector } from "react-redux";
import Modal from "@/components/common/Modal";
import UserSettings from "@/components/common/UsetSettings";

type HeaderType = {
  dict: { [key: string]: { [key: string]: string } } | null;
};
const MobileHeader = ({ dict }: HeaderType) => {
  const user = useSelector((store: any) => store.auth.user);

  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <div className="bb-header__area_mobile">
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
          {!user && (
            <div className="bb-header__auth-btns">
              <Link href="/login" className="signin">
                {dict?.Header?.Sign_in}
              </Link>
              <Link href="/signup" className="signup">
                {dict?.Header?.Sign_up}
              </Link>
            </div>
          )}
          {user && (
            <div className="bb-header__action-inner">
              <div className="bb-header__user-acount">
                <span role="button" onClick={() => setIsOpen(true)}>
                  <i className="flaticon-user"></i>
                </span>
              </div>
            </div>
          )}
        </div>
      </header>
      <Modal
        open={modalIsOpen}
        close={closeModal}
        title={dict?.UserSettings?.Title as string}
        className="user-settings"
      >
        <UserSettings policyActive="active" dict={dict?.UserSettings} />
      </Modal>
    </>
  );
};

export default MobileHeader;
