import React from "react";

const MovieCard = ({ filim }) => {
  return (
    <div className="movie">
      <div>
        <p>{filim.Year}</p>
      </div>
      <div>
        <img src={filim.Poster} alt="Poster"/>
      </div>
      <div>
        <span>{filim.Type}</span>
        <h3>{filim.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
