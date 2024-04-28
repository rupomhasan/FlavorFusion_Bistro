import { IoCall, IoLocation } from "react-icons/io5";
import SectionTitle from "../../Components/Shared/Title/SectionTitle";
import { IoMdClock } from "react-icons/io";

const Location = () => {
  return (
    <div className="mt-20 max-w-screen-lg mx-auto">
      <SectionTitle subheading="Visit Us" heading="Our Location " />
      <div className="grid grid-cols-3 gap-4 mx-4  ">
        <div>
          <div className="flex justify-center bg-[#d1a054] py-2 ">
            <IoCall className="text-2xl" />
          </div>
          <div className=" flex justify-center items-center min-w-56 bg-base-300 min-h-40 ">
            <div className="text-center space-y-1">
              <h5 className="text-xl font-bold  uppercase">Address</h5>
              <p>Dhaka , Bangladesh</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center bg-[#d1a054] py-2 ">
            <IoLocation className="text-2xl" />
          </div>
          <div className=" flex justify-center items-center min-w-56 bg-base-300 min-h-40 ">
            <div className="text-center space-y-1">
              <h5 className="text-xl font-bold  ">PHONE</h5>
              <p>+8801318044328</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center bg-[#d1a054] py-2 ">
            <IoMdClock className="text-2xl" />
          </div>
          <div className=" flex justify-center items-center min-w-56 bg-base-300 min-h-40 ">
            <div className="text-center space-y-1">
              <h5 className="text-xl font-bold  ">Working Hours</h5>
              <p>Mon-Fri: 08:00 - 22:00</p>
              <p>Sat-Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
