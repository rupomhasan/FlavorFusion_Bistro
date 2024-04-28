import { Link } from "react-router-dom";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../Title/SectionTitle";
import Button from "./Button/Button";
import MenuItem from "./MenuItem";

const MenuCategory = ({ items, title }) => {
  console.log(title);
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 max-w-screen-lg mx-auto ">
        {items.map((item, idx) => (
          <MenuItem key={idx} item={item} />
        ))}
      </div>
      <Link to={`/shop/${title}`}>
        <Button>View Full Menu</Button>
      </Link>
    </div>
  );
};

export default MenuCategory;
