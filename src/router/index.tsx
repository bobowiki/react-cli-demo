import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import LayoutCom from "../layout";

const router = createBrowserRouter([
  {
    element: <LayoutCom />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
