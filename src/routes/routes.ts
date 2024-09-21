//todo Import utils
import { ROLES, OWNER, DOCTOR } from "../utils";

//todo Import home page
import { Home } from "../pages/admin/home";

//todo Import admin pages
import { Admin } from "../pages/admin/admins";
import { Admins } from "../pages/admin/admins";
import { AdminCreate } from "../pages/admin/admins";
import { AdminsStatistics } from "../pages/admin/admins";



export const routes = [
  {
    path: "/",
    component: Home,
    roles: [...Object.values(ROLES)],
  },

  {
    path: "/doctor/statistics",
    component: AdminsStatistics,
    roles: [OWNER, DOCTOR],
  },
  {
    path: "/doctor/create",
    component: AdminCreate,
    roles: [OWNER, DOCTOR],
  },
  {
    path: "/doctor/:username",
    component: Admin,
    roles: [OWNER, DOCTOR],
  },
  {
    path: "/doctors",
    component: Admins,
    roles: [OWNER, DOCTOR],
  }
];
