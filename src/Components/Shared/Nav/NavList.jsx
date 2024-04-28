import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-500" : "text-black"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-yellow-500" : "text-black"
          }
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
      <li>
        <NavLink
          to="/contact"
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
    </>
  );
};

export default NavList;
