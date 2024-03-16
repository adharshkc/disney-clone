import GenresList from "../constants/genresList"
import MovieCard from "./MovieCard"
const GenreMovieList = () => {
  return (
    <div>
        {GenresList.genere.map((item,index)=>index<=4&&(
            <div className='p-8 px-8 md:px-16' key={item.id}>
                <h2 className='text-[20px] text-white 
                font-bold'>{item.name}</h2> 
                <MovieCard genreName={item.name} index_={index} />   
            </div>
        ))}
    </div>
  )
}

export default GenreMovieList