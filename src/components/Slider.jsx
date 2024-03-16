import { useRef } from "react";
import { movieList } from "../constants/MovieList";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const screenWidth = window.innerWidth;

const Slider = () => {
  const elementRef = useRef();
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[225px] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[225px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4
scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            src={item}
            alt="movie"
            className="min-w-full md:h-auto lg:h-[500px] object-cover
        object-left-top mr-5 rounded-md hover:border-[4px] border-gray-700 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
