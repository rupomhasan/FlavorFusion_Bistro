import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Nav/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
