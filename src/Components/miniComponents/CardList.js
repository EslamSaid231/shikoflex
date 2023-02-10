import React from "react";
import MovieCard from "./MovieCard";

export default function CardList({ Movies }) {
  const Cards = {
    margin: " 0 auto",
    paddingLeft: "30px",

    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <div style={Cards} className="f3 fw4 pa3 mv0">
      {" "}
      {Movies.map((Movie) => (
        <div key={Movie.id} style={{ padding: "5px" }}>
          <MovieCard
            MovieDescription={Movie.describe}
            MovieTitle={Movie.title}
          />
        </div>
      ))}
    </div>
  );
}

//<MovieCard MovieDescription={""} MovieTitle={""} />
