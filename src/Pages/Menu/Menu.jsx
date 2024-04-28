import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Common/Cover/Cover";
import menuBanner from "../../assets/menu/banner3.jpg";
import dessertBanner from "../../assets/menu/dessert-bg.jpeg";
import pizzaBanner from "../../assets/menu/pizza-bg.jpg";
import saladBanner from "../../assets/menu/salad-bg.jpg";
import soupBanner from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "../../Components/Shared/Menu/MenuCategory";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/Shared/Title/SectionTitle";

const Menu = () => {
  const menus = useMenu();

  const offer = menus.filter((items) => items.category === "offered");
  const desert = menus.filter((items) => items.category === "desert");
  const salad = menus.filter((items) => items.category === "salad");
  const soup = menus.filter((items) => items.category === "soup");
  const pizza = menus.filter((items) => items.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS || MENU</title>
      </Helmet>
      <div className="space-y-12">
        <Cover
          img={menuBanner}
          title="our menu"
          message="would you like to try a dish"
        />
        <SectionTitle subheading="dont't miss" heading="today's offer" />

        <MenuCategory title="offered" items={offer} />
      </div>
      {/* Deserts */}
      <div className="space-y-12 mt-20">
        <Cover
          message="Sweeten Your Day with Delightful Desserts."
          title="deserts"
          img={dessertBanner}
        />
        <MenuCategory items={desert} title="desert" />
      </div>
      {/* Pizza */}
      <div className="space-y-12 mt-20">
        <Cover
          message="Indulge in Irresistible Pizza Perfection."
          title="Pizza"
          img={pizzaBanner}
        />
        <MenuCategory items={pizza} title="pizza" />
      </div>
      {/* salads */}
      <div className="space-y-12 mt-20">
        <Cover
          message="Freshness in Every Crunch: Savory Salad Selections."
          title="salads"
          img={saladBanner}
        />
        <MenuCategory items={salad} title="salad" />
      </div>
      {/* Soups */}
      <div className="space-y-12 mt-20">
        <Cover
          message="Savor Comfort in Every Spoonful: Soup Specialties Await."
          title="soups"
          img={soupBanner}
        />
        <MenuCategory items={soup} title="soup" />
      </div>
    </div>
  );
};

export default Menu;
