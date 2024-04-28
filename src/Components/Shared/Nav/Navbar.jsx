import { Link } from "react-router-dom";
import NavList from "./NavList";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar fixed z-10 text-white max-w-screen-xl mx-auto bg-black bg-opacity-20  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm  font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavList />
            </ul>
          </div>
          <Link to="/" className="">
            <h5 className="font-extrabold text-2xl">BISTRO BOSS</h5>
            <p className="text-xl font-bold tracking-[3px]">RESTAURANT</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold px-1 ">
            <NavList />
          </ul>
        </div>
        <div className="navbar-end gap-2 ">
          <button className="text-xl font-bold ">SIGN OUT </button>
          <div>
            <FaUserCircle className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
