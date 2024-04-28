import { useState } from "react";
import FoodCard from "./FoodCard";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

const Foods = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 6;
  const TotalPage = Math.ceil(items.length / itemPerPage);

  const handlePrevious = () => {
    if (1 < currentPage) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (TotalPage > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = Math.min(startIndex + itemPerPage, items.length);
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {
            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-10 mx-10">
              {items?.slice(startIndex, endIndex)?.map((item, idx) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          }
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center mt-20">
        <div className="join">
          <button
            onClick={handlePrevious}
            className="join-item btn text-xl bg-base-300  border-none btn-sm"
          >
            <MdKeyboardDoubleArrowLeft />
          </button>
          {Array(TotalPage)
            .fill(0)
            .map((item, idx) => {
              const pageNumber = idx + 1;

              return (
                <button
                  onClick={() => setCurrentPage(pageNumber)}
                  key={idx}
                  className={`join-item btn text-xl   border-none btn-sm ${
                    pageNumber === currentPage
                      ? "bg-yellow-600 text-white hover:bg-yellow-600 "
                      : "hover:bg-yellow-500"
                  } `}
                >
                  {pageNumber}
                </button>
              );
            })}
          <button
            onClick={handleNext}
            className="join-item btn text-xl bg-base-300  border-none btn-sm"
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Foods;
