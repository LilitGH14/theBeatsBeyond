"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import headerLogo from "../../../../public/assets/img/logo/big-logo.png";
import Language from "@/components/common/Language";
import { useSelector } from "react-redux";
import Modal from "@/components/common/Modal";
import UserSettings from "@/components/common/UsetSettings";
import menu_data from "@/constants/menu-data";

type HeaderType = {
  dict: { [key: string]: { [key: string]: string } } | null;
};
const Header = ({ dict }: HeaderType) => {
  const user = useSelector((store: any) => store.auth.user);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <div className="bb-header__area">
          <div className="container-fluid ms-maw-1710">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="p-relative">
                  <div className="bb-header__main">
                    <div className="bb-header__left">
                      <div className="bb-header__logo">
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
                      <div className="bb-header__main-menu">
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
                    <div className="bb-header__right">
                      <Language />
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
                          <div className="bb-header__user__acount d-none d-sm-inline-flex">
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
