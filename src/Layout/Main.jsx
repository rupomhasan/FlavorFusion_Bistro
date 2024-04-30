import Navbar from "../Components/Shared/Nav/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
