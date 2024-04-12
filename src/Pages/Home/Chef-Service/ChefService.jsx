import img from "../../../assets/home/chef-service.jpg";
const ChefService = () => {
  return (
    <div className="my-20 mx-2">
      <div className="relative">
        <img src={img} alt="ChefService" />
        <div className="flex justify-center bg-white max-w-md ">
          <div className="absolute top-1/2 bottom-1/2 ">
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
