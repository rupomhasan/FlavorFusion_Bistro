import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../Chef-Service/ChefService";
import MenuCategory from "../../../Components/Shared/Menu/MenuCategory";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/Shared/Title/SectionTitle";
import CallUs from "../CallUs";
import Hero from "../Hero/Hero";
import Offered from "../Offered/Offered";

const Home = () => {
  const menus = useMenu();
  const offer = menus.filter((items) => items.category === "offered");

  return (
    <div className="space-y-20">
      <Helmet>
        <title>BISTRO BOSS || HOME</title>
      </Helmet>
      <Banner />
      <Category />
      <ChefService />
      <SectionTitle subheading="Check it out" heading="From Our Menu" />
      <MenuCategory items={offer} />
      <CallUs />
      <Offered />
      <Hero />
    </div>
  );
};

export default Home;
