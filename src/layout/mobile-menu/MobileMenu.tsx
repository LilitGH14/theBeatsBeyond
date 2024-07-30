import Language from "@/components/common/Language";
import menu_data from "../../constants/menu-data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { imageLoader } from "@/hooks/ImageLoader";
import avatar from "../../../public/assets/img/avatars/suga.jpg";
import { useSelector } from "react-redux";
import Modal from "@/components/common/Modal";
import UserSettings from "@/components/common/UsetSettings";

type MobileMenuProps = {
  open: boolean;
  toggle: () => void;
  dict: any;
};
const MobileMenu = ({ open, dict, toggle }: MobileMenuProps) => {
  const user = useSelector((store: any) => store.auth.user);

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const selectMenuItem = () => {
    setIsOpen(true);
    toggle();
  };

  useEffect(() => {
    open && document.body.setAttribute("style", "overflow:hidden");

    return () => {
      document.body.removeAttribute("style");
    };
  }, [open]);

  return (
    <>
      <ul className={`bb-mobile-menu__area ${open ? "open" : ""}`}>
        <li className="bb-mobile-menu__user-info">
          <Image
            loader={imageLoader}
            priority
            width={143}
            height={45}
            src={avatar}
            alt={dict?.Header?.Avatar_alt as string}
          />
          <span>John Doe</span>
        </li>
        <hr />
        {menu_data?.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{dict?.Header?.[item.title]}</Link>
          </li>
        ))}
        <hr />
        <li>
          <Language />
        </li>
        <hr />
        <li role="button" onClick={selectMenuItem}>
          {dict?.Header?.User_Settings}
        </li>
      </ul>
      <Modal
        open={modalIsOpen}
        close={closeModal}
        title={dict?.UserSettings?.Title as string}
        className="user-settings"
      >
        <UserSettings dict={dict?.UserSettings} />
      </Modal>
    </>
  );
};

export default MobileMenu;
