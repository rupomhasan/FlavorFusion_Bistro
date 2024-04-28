import { useParams } from "react-router-dom";
import Cover from "../../Components/Common/Cover/Cover";
import shopBannerBg from "../../assets/shop/banner2.jpg";
import Order from "./Order";

const OurShop = () => {
  const { category } = useParams();
  return (
    <div>
      <Cover
        title="Our Shop"
        message="Would You Like To Try A Dish"
        img={shopBannerBg}
      />
      <Order category={category} />
    </div>
  );
};

export default OurShop;
