import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../Chef-Service/ChefService";

const Home = () => {
  return (
    <div className="space-y-20">
      <Helmet>
        <title>BISTRO BOSS || HOME</title>
      </Helmet>
      <Banner />
      <Category />
      <ChefService />
    </div>
  );
};

export default Home;
