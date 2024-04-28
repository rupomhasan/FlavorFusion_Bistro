import FoodCard from "../../../Components/Shared/Food/FoodCard";
import SectionTitle from "../../../Components/Shared/Title/SectionTitle";
import useMenu from "../../../Hooks/useMenu";

const Offered = () => {
  const menus = useMenu();
  const offer = menus.filter((items) => items.category === "offered");

  return (
    <div>
      <SectionTitle
        heading="Chef Recommends"
        subheading="should try"
      ></SectionTitle>
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-10 mx-10">
        {offer.slice(0, 3).map((item) => (
          <FoodCard item={item} key={item._id}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Offered;
