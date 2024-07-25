"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import headerLogo from "../../../../public/assets/img/logo/big-logo.png";
import menu_data from "@/data/menu-data";
import Language from "@/components/common/Language";
import { useSelector } from "react-redux";
import Modal from "@/components/common/Modal";
import UserSettings from "@/components/common/UsetSettings";

type HeaderType = {
  dict: { [key: string]: { [key: string]: string } } | null;
};
const Header = ({ dict }: HeaderType) => {
  const user = useSelector((store: any) => store.auth.user);

  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <div className="header__area header-1 ms-header-fixed ms-bg-body sticky">
          <div className="container-fluid ms-maw-1710">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="mega__menu-wrapper p-relative">
                  <div className="header__main d-flex align-items-center justify-content-between">
                    <div className="header__left">
                      <div className="header__logo pt-25 pb-25">
                        <Link href="/">
                          <Image
                            loader={imageLoader}
                            priority
                            width={143}
                            height={45}
                            src={headerLogo}
                            alt={dict?.Header?.logo_img as string}
                          />
                          <span>Betta</span>
                        </Link>
                      </div>
                      <div className="mean__menu-wrapper">
                        <div className="main-menu main-menu-ff-space d-none d-lg-inline-block">
                          <nav>
                            <ul>
                              {menu_data.map((menu) => (
                                <li
                                  key={menu.id}
                                  className={`${
                                    menu.active ? "active has-dropdown" : ""
                                  }`}
                                >
                                  <Link href={menu.link}>
                                    {dict?.Header?.[menu.title]}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div className="header__right">
                      <Language />
                      {!user && (
                        <div className="auth-btns">
                          <Link href="/login" className="signin">
                            {dict?.Header?.Sign_in}
                          </Link>
                          {/* <Link href="/signup" className="signup">
                            {dict?.Header?.Sign_up}
                          </Link> */}
                        </div>
                      )}
                      {user && (
                        <div className="header__action-inner d-flex align-items-center">
                          <div className="user__acount d-none d-sm-inline-flex">
                            <span role="button" onClick={() => setIsOpen(true)}>
                              <i className="flaticon-user"></i>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default Header;
