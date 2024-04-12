import img from "../../../assets/home/chef-service.jpg";
const ChefService = () => {
  return (
    <div className=" mx-2 bg-white">
      <div className="relative ">
        <div className="bg-gray-200">
          <img src={img} alt="ChefService " />
        </div>
        <div className="absolute inset-0 flex justify-center items-center  ">
          <div className="max-w-xl bg-white  p-4">
            <h3 className="text-4xl font-thin my-2  text-center">
              Bistro Boss
            </h3>
            <p className="text-center">
              Experience gourmet convenience with our chef service. Elevate your
              dining with personalized menus prepared by skilled chefs in the
              comfort of your home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
