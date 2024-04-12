import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          CONTACT
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-yellow-500" : "")}
        >
          OUR SHOP
        </NavLink>
      </li>
    </>
  );
};

export default NavList;
