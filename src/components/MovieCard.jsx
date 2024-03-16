import { useState, useRef } from "react"
import { movies } from "../constants/MovieList"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const screenWidth = window.innerWidth;

const MovieCard = () => {
    const [movieList, setMovieList] = useState()
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
        mx-[-35px]   mt-[125px] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[125px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
    <div className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth" ref={elementRef}>
        {movies.map((item)=>(
          <img src={item} alt=""  className='w-[110px] md:w-[200px] h-auto rounded-lg
          hover:border-[3px] border-gray-400 cursor-pointer
          hover:scale-110 transition-all duration-150 ease-in' />
        ))}
    </div>
    </div>
  )
}

export default MovieCard