import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../Components/Shared/SectionTitle";

const Category = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // initialSlide: 0,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" overflow-hidden my-20 ">
      <div>
        <SectionTitle
          subheading={"From 11:00am to 10:00pm"}
          heading={"ORDER ONLINE"}
        />
      </div>
      <Slider {...settings}>
        <div className=" relative">
          <img src={slide1} className="mx-auto m-2" />
          <p className="absolute bottom-6 left-1/3 mx-auto  text-2xl  font-bold ">
            SALAD
          </p>
        </div>
        <div className="relative">
          <img src={slide2} className="mx-auto m-2" />{" "}
          <p className="absolute bottom-6 left-1/3 mx-auto  text-2xl  font-bold ">
            PIZZA
          </p>
        </div>{" "}
        <div className="relative">
          <img src={slide3} className="mx-auto m-2" />
          <p className="absolute bottom-6 left-1/3 mx-auto  text-2xl  font-bold ">
            SOUP
          </p>
        </div>{" "}
        <div className="relative">
          <img src={slide4} className="mx-auto m-2" />
          <p className="absolute bottom-6 left-1/3 mx-auto  text-2xl  font-bold ">
            DESSERTS
          </p>
        </div>{" "}
      </Slider>
    </div>
  );
};

export default Category;
