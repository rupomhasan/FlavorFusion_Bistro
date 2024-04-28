import Navbar from "../Components/Shared/Nav/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;