import React from "react";
import pic1 from "./images/pic1.jpg";
import "../Styles/MovieCard.css";
import "tachyons";
import Rating from "./Rating";
export default function MovieCard({ MovieTitle, MovieDescription }) {
  return (
    <div>
      <div className="MovieCard grow">
        <img className="Moviepic" src={pic1} alt="ay" />
        <div className="description">
          <h2 className="flex">{MovieTitle}</h2>
          <Rating />
        </div>
        <div>
          <p>{MovieDescription}</p>
        </div>
      </div>
    </div>
  );
}
