import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Main from "../Layout/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);
