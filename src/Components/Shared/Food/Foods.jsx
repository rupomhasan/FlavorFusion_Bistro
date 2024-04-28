import SectionTitle from "../Title/SectionTitle";
import FoodCard from "./FoodCard";

const Foods = ({ items }) => {
  console.log(items);
  return (
    <div>
      <SectionTitle heading="Chef Recommends" subheading="should try" />
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-10 mx-10">
        {items?.slice(0, 3).map((item, idx) => (
          <FoodCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
