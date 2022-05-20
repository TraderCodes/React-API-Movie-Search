import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';

const SingleMovie = () => {
   const { id } = useParams();
   const [movie, setMovies] = useState({});
   const [isLoading, setLoading] = useState(true);
   const [error, setError] = useState({ show: false, msg: '' });
   const fetchMovie = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.response === 'False') {
         setError({ show: true, msg: data.Error });
         setLoading(false);
      } else {
         setMovies(data);
         setLoading(false);
      }
   };
   useEffect(() => {
      fetchMovie(`${API_ENDPOINT}&i=${id}`);
   }, [id]);

   //  if is loading return loading
   if (isLoading) {
      return <div className="Loading"></div>;
   }
   if (error.show) {
      return (
         <div className="page-error">
            <h1>{error.msg}</h1>
            <Link to="/" className="btn">
               Back to Movie
            </Link>
         </div>
      );
   }
   // start return movie
   const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
   return (
      <section className="single-movie">
         <img src={poster} alt={title} />
         <div className="single-movie-info">
            <h2>{title}</h2>
            <p>{plot}</p>
            <h4>{year}</h4>
            <Link to="/" className="btn">
               Back to Movies
            </Link>
         </div>
      </section>
   );
};

export default SingleMovie;
