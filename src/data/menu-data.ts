type TSubmenu = {
  title: string;
  link: string;
};

type TMegaManu = {
  title: string;
  link: string;
  submenus: TSubmenu[];
};

interface TMenuItem {
  menuItem?: any;
  active?: string;
  id: number;
  hasDropdown?: boolean;
  title: string;
  link: string;
  submenus?: any[];
  pages?: boolean;
  megaMenu?: boolean;
  mega_menus?: TMegaManu[];
}

const menu_data: TMenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    hasDropdown: false,
  },
  {
    id: 2,
    title: "Stories",
    link: "/stories",
    hasDropdown: false,
  },
  // {
  //   id: 3,
  //   title: "Songs",
  //   link: "/songs",
  //   hasDropdown: false,
  // },
  {
    id: 5,
    hasDropdown: false,
    title: "How_It_Works",
    link: "/work-system",
  },
  {
    id: 6,
    hasDropdown: false,
    title: "About_us",
    link: "/about",
  },
  {
    id: 7,
    hasDropdown: false,
    title: "Contact_us",
    link: "/contact",
  },
];

export default menu_data;
