//Layout
import LayoutAdmin from "../layouts/layoutAdmin";
import LayoutBasic from "../layouts/layoutBasic";

//Admin pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import AdminUsers from "../pages/Admin/users";
import AdminMenuWeb from "../pages/Admin/MenuWeb";
import AdminCourses from "../pages/Admin/Courses";
import AdminBlog from "../pages/Admin/Blog";

//pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Blog from "../pages/Blog";

//others
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/admin",
    exact: false,
    component: LayoutAdmin,
    routes: [
      {
        path: "/admin",
        exact: true,
        component: AdminHome,
      },
      {
        path: "/admin/login",
        exact: true,
        component: AdminSignIn,
      },
      {
        path: "/admin/users",
        exact: true,
        component: AdminUsers,
      },
      {
        path: "/admin/menu",
        exact: true,
        component: AdminMenuWeb,
      },
      {
        path: "/admin/courses",
        exact: true,
        component: AdminCourses,
      },
      {
        path: "/admin/blog",
        exact: true,
        component: AdminBlog,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    exact: false,
    component: LayoutBasic,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/contact",
        component: Contact,
        exact: true,
      },
      {
        path: "/courses",
        component: Courses,
        exact: true,
      },
      {
        path: "/index.html",
        component: Home,
        exact: true,
      },
      {
        path: "/blog",
        component: Blog,
        exact: true,
      },
      {
        path: "/blog/:url",
        component: Blog,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
