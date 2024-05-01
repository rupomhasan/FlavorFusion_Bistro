import { Link, useNavigate } from "react-router-dom";
import NavList from "./NavList";
import { FaUserCircle } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigation = useNavigate();
  const singOutUser = () => {
    logoutUser().then(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "SignOut successfully",
      });
      navigation("/");
    });
  };

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
          {user ? (
            <button onClick={singOutUser} className="text-xl font-bold ">
              LogOut
            </button>
          ) : (
            <Link to="/login" className="text-xl font-bold ">
              Login
            </Link>
          )}
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>

          <div>
            <FaUserCircle className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
