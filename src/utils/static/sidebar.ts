//todo Import utils
import {
  ROLES,
  OWNER
} from "../constants";

//todo Import icons
import { RxDotFilled } from "react-icons/rx";

import { FaUsersCog } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";

//! ----------------------------------------------------------------------

export const sidebar = [
  {
    disabled: false,
    path: "/",
    title: "sidebar.main.title",
    Icon: MdAnalytics,
    roles: [...Object.values(ROLES)],
  },
  {
    disabled: false,
    title: "sidebar.admins.title",
    Icon: FaUsersCog,
    roles: [OWNER],
    childrens: [
      {
        disabled: false,
        path: "/doctor/statistics",
        title: "sidebar.admins.statistics",
        Icon: RxDotFilled,
        roles: [OWNER],
      },
      {
        disabled: false,
        path: "/doctors",
        title: "sidebar.admins.all",
        Icon: RxDotFilled,
        roles: [OWNER],
      },
    ],
  }
];
