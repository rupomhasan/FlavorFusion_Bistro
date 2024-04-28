import { Link } from "react-router-dom";

const Button = ({ children }) => {
  console.log(children);
  return (
    <div className="flex justify-center my-4">
      <Link
        to="/"
        className="btn px-5 hover:text-yellow-500 hover:bg-black uppercase border-b-yellow-500 hover:border-b-yellow-500  border-b-4"
      >
        {children}
      </Link>
    </div>
  );
};

export default Button;
