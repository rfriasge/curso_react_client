// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Admin Pages
import AdminHome from "../pages/admin/Admin";
import AdminSignIn from "../pages/admin/SignIn";

//client pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { Error404 } from "../pages/Error404";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSignIn,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/home",
        component: Home,
        exact: true,
      },
      {
        path: "/contact",
        component: Contact,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];
// const routesClient = [
//   {
//     path: "/",
//     layout: LayoutBasic,
//     component: Home,
//   },
//   {
//     path: "/contact",
//     layout: LayoutBasic,
//     component: Contact,
//   },
//   {
//     component: Error404,
//   },
// ];

//const routes = [...routesAdmin, ...routesClient];
export default routes;
