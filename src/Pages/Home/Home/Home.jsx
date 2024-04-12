import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../Chef-Service/ChefService";

const Home = () => {
  return (
    <div className="space-y-20">
      <Banner />
      <Category />
      <ChefService />
    </div>
  );
};

export default Home;
