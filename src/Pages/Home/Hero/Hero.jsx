// import bgImg from "../../../assets/home/chef-service.jpg";

import SectionTitle from "../../../Components/Shared/Title/SectionTitle";

const Hero = () => {
  return (
    <div>
      <SectionTitle subheading="check it out" heading="from our menu" />;
      <div className="hero  bg-[url('/src/assets/home/featured.jpg')] bg-cover ">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="hero-content justify-evenly flex-col md:flex-row md:py-28 gap-10">
            <img
              src="/src/assets/home/featured.jpg"
              className="md:max-w-sm rounded-lg shadow-2xl"
            />
            <div className=" text-left">
              <h1 className="text-xl uppercase font-bold">April 27,2024</h1>
              <h1 className="text-xl uppercase font-bold">
                Where can i get some?
              </h1>
              <p className="py-6 max-w-md">
                Embark on a culinary journey with our comprehensive guide,
                exploring flavors, ingredients, and cooking techniques to
                elevate your dining experience to new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
