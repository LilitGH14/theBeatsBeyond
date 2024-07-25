import menu_data from "../../data/menu-data";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [openSubMenu, setopenSubMenu] = useState<boolean>(false);
  const [subMenuNum, setsubMenuNum] = useState<number>(0);
  const [openMegaMenu, setopenMegaMenu] = useState<boolean>(false);
  const [megaMenuNum, setmegaMenuNum] = useState<number>(0);
  const [opensubMegaMenu, setopensubMegaMenu] = useState<boolean>(false);
  const [megasubMenuNum, setmegasubMenuNum] = useState<number>(0);

  const handleActiveSubMenu = (index: number): void => {
    setopenSubMenu(!openSubMenu);
    setsubMenuNum(index);
  };

  const handleActiveMegaMenu = (index: number): void => {
    setopenMegaMenu(!openMegaMenu);
    setmegaMenuNum(index);
  };

  const handleActivesubMegaMenu = (index: number): void => {
    setopensubMegaMenu(!opensubMegaMenu);
    setmegasubMenuNum(index);
  };

  return (
    <ul>
      {menu_data?.map((item) => (
        <li
          key={item.id}
          className={`${item.hasDropdown === true ? "has-dropdown" : ""} ${
            item.megaMenu === true ? "has-mega-menu" : ""
          } ${
            openMegaMenu && megaMenuNum === item.id ? "dropdown-opened" : ""
          }`}
        >
          <Link href={item.link}>{item.title}</Link>
          {item?.hasDropdown === true && (
            <>
              {item.submenus?.map((subItem, index) => (
                <ul
                  key={index}
                  className="submenu"
                  style={{
                    display:
                      openSubMenu && subMenuNum === item.id ? "block" : "none",
                  }}
                >
                  <li>
                    <Link href={subItem.link}>{subItem.title}</Link>
                  </li>
                </ul>
              ))}
            </>
          )}
          {item?.megaMenu === true && (
            <ul
              className="mega-menu"
              style={{
                display:
                  openMegaMenu && megaMenuNum === item.id ? "block" : "none",
              }}
            >
              {item?.mega_menus?.map((megaItem, mIndex) => (
                <li key={mIndex}>
                  <Link href="#" className="mega-menu-title">
                    {megaItem.title}
                  </Link>
                  <ul
                    style={{
                      display:
                        opensubMegaMenu && megasubMenuNum === mIndex
                          ? "block"
                          : "none",
                    }}
                  >
                    {megaItem?.submenus?.length &&
                      megaItem?.submenus?.map((subMegaItem, subMegaIndex) => (
                        <li key={subMegaIndex}>
                          <Link href={subMegaItem.link}>
                            {" "}
                            {subMegaItem.title}{" "}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <Link
                    onClick={() => handleActivesubMegaMenu(mIndex)}
                    className={`mean-expand ${
                      opensubMegaMenu && megasubMenuNum === mIndex
                        ? "mean-clicked"
                        : ""
                    }`}
                    href="#"
                    style={{ fontSize: "18px" }}
                  >
                    <i className="fal fa-plus"></i>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {item?.hasDropdown === true && (
            <Link
              onClick={() => handleActiveSubMenu(item.id)}
              className={`mean-expand ${
                openSubMenu && subMenuNum === item.id ? "mean-clicked" : ""
              }`}
              href="#"
              style={{ fontSize: "18px" }}
            >
              <i className="fal fa-plus"></i>
            </Link>
          )}
          {item?.megaMenu === true && (
            <Link
              onClick={() => handleActiveMegaMenu(item.id)}
              className={`mean-expand ${
                openMegaMenu && megaMenuNum === item.id ? "mean-clicked" : ""
              }`}
              href="#"
              style={{ fontSize: "18px" }}
            >
              <i className="fal fa-plus"></i>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
