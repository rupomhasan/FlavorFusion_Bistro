import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../Title/SectionTitle";
import Button from "./Button/Button";
import MenuItem from "./MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 max-w-screen-lg mx-auto ">
        {items.map((item, idx) => (
          <MenuItem key={idx} item={item} />
        ))}
      </div>
      <Button>View Full Menu</Button>
    </div>
  );
};

export default MenuCategory;
