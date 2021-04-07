import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      
      <img src={poster} alt={title} onError={(e)=>{e.target.onerror = null; e.target.src="https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png"}} />
      <Link to={{pathname:'/movie_detail', state:{year, title,summary, poster, genres}}}>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul>
          {genres.map((genre, idx) => {
            return (
              <li key={idx}>{genre}</li>
            )
          })}
        </ul>
        <p className="movie_summary">{summary.slice(0, 70)}...</p>
      </div>
      
    </Link>
    </div>
  );
}

Movie.propType = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default Movie;
