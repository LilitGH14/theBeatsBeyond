"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import headerLogo from "../../../../public/assets/img/logo/big-logo.png";
import Language from "@/components/common/Language";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@/components/common/Modal";
import UserSettings from "@/components/common/UsetSettings";
import menu_data from "@/constants/menu-data";
import { setUser } from "@/redux/slices/authSlice";

type HeaderType = {
  dict: { [key: string]: { [key: string]: string } } | null;
};
const Header = ({ dict }: HeaderType) => {
  const dispatch = useDispatch();

  const user = useSelector((store: any) => store.auth.user);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [activeRoute, setActiveRoute] = useState<string>("home");

  const closeModal = () => {
    setIsOpen(false);
  };

  const selectActiveRoute = (route: string) => {
    setActiveRoute(route);
    localStorage.setItem("selectedRoute", route);
  };

  const logout = () => {
    localStorage.clear();
    dispatch(setUser(null));
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
                        <Link
                          href="/"
                          onClick={() => selectActiveRoute("home")}
                        >
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
                                  activeRoute === menu.title.toLowerCase()
                                    ? "active"
                                    : ""
                                }`}
                                onClick={() =>
                                  selectActiveRoute(menu.title.toLowerCase())
                                }
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
                        <>
                          <button
                            onClick={() => logout()}
                            className="logout_btn"
                          >
                            <i
                              className="fa fa-sign-out"
                              aria-hidden="true"
                            ></i>
                            {dict?.Header?.Logout}
                          </button>
                          <div className="bb-header__action-inner">
                            <div className="bb-header__user-acount">
                              <span
                                role="button"
                                onClick={() => setIsOpen(true)}
                              >
                                <i className="flaticon-user"></i>
                              </span>
                            </div>
                          </div>
                        </>
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
