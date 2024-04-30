import { BiHome, BiMenu } from "react-icons/bi";
import { GrContactInfo } from "react-icons/gr";
import { MdContactPage, MdDashboard, MdShop, MdShop2 } from "react-icons/md";
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
          <BiHome /> HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-yellow-500" : "text-black"
          }
        >
          <BiMenu /> OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/shop/${"dessert"}`}
          className={({ isActive }) =>
            isActive ? "text-yellow-500" : "text-black"
          }
        >
          <MdShop2 /> OUR SHOP
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-yellow-500" : "text-black"
          }
        >
          <GrContactInfo /> CONTACT
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-yellow-500" : "text-black"
          }
        >
          <MdDashboard /> DASHBOARD
        </NavLink>
      </li>
    </>
  );
};

export default NavList;
