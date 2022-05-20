import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
const url =
   'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
   const { movies, loading } = useGlobalContext();

   if (loading) {
      return <div className="loading"> LOADING</div>;
   }
   return (
      <section className="movies">
         {/* deconstruct  */}
         {movies.map((movie) => {
            const {
               imdbID: id,
               Poster: poster,
               Title: title,
               Year: year,
            } = movie;
            return (
               <Link to={`/movies/${id}`} key={id} className="movie">
                  <article>
                     {/* set default poster is not showing  */}
                     <img src={poster === 'N/A' ? url : poster} alt={title} />
                     <div className="movie-info">
                        <h4 className="title">{title}</h4>
                        <p>{year}</p>
                     </div>
                  </article>
               </Link>
            );
         })}
      </section>
   );
};

export default Movies;
