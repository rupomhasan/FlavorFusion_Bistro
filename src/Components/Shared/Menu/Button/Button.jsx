const Button = ({ children }) => {
  return (
    <div className="flex justify-center my-4">
      <button className="btn px-5 hover:text-yellow-500 hover:bg-black uppercase border-b-yellow-500 shadow-lg shadow-orange-300/50  hover:border-b-yellow-500  border-b-4">
        {children}
      </button>
    </div>
  );
};

export default Button;
