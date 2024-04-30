import { FaGoogle } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { LuGithub } from "react-icons/lu";

const Social = () => {
  return (
    <div className="flex justify-center items-center gap-5 text-5xl">
      <TiSocialFacebook className="border-[#d1a052] border-2 rounded-full p-2 " />
      <FaGoogle className="border-[#d1a052] border-2 rounded-full p-3 " />
      <LuGithub className="border-[#d1a052] border-2 rounded-full p-3 " />
    </div>
  );
};

export default Social;
