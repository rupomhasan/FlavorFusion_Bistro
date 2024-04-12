import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className=" md:grid md:grid-cols-2   justify-evenly  text-white">
        <div className="bg-[#1f2937] flex p-10 justify-center  ">
          <div className="w-fit ">
            <h3 className="text-3xl font-bold my-5">CONTACT US</h3>
            <div className="space-y-2 text-lg">
              <p>123 ABS Street , Uni 21 , Bangladesh </p>
              <p>+8801318044328</p>
              <p>Mon-Fri : 08 : 00 - 22 : 00</p>
              <p>Sat - Sun : 10 : 00 - 23 : 00</p>
            </div>
          </div>
        </div>
        <nav className="bg-[#111827] flex p-10 justify-center items-center">
          <div className="w-fit text-center">
            <h6 className="footer-title">Follow US</h6>
            <p>Join us on social media</p>
            <div className="grid grid-flow-col gap-4">
              <div className="flex gap-2 justify-center text-xl my-4">
                <FaTwitter />
                <FaFacebookF />
                <FaInstagram />
              </div>
      </div>
    </div>
        </nav>
      </div>
      <div className="footer footer-center text-white p-4  bg-[#151515]">
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
