import React, { useEffect, useState } from "react";
import CardList from "./miniComponents/CardList";
import Navbar from "./miniComponents/Navbar";
import "./Styles/Container.css";
import "tachyons";
import SearchBar from "./miniComponents/SearchBar";
import Scroll from "./miniComponents/Scroll";

const Movies = [
  { id: "1", title: "Movie1", describe: "1" },
  { id: "2", title: "Movie2", describe: "2" },
  { id: "3", title: "Movie3", describe: "3" },
  { id: "4", title: "Movie4", describe: "4" },
  { id: "5", title: "Movie5", describe: "5" },
  { id: "6", title: "Movie6", describe: "6" },
  { id: "7", title: "Movie7", describe: "7" },
  { id: "8", title: "Movie8", describe: "8" },
];

export default function Container() {
  const [MoviesList, setMoviesList] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    setMoviesList(Movies);
    setFilterMovies(Movies);
  }, []);
  const handleSearch = (event) => {
    const getSearch = event.target.value;

    if (getSearch.length > 0) {
      const searchData = MoviesList.filter((movie) =>
        movie.title.toLowerCase().includes(getSearch)
      );
      setMoviesList(searchData);
    } else {
      setMoviesList(filterMovies);
    }
    setQuery(getSearch);
  };
  return (
    <div>
      <Navbar />
      <SearchBar Search={handleSearch} />

      <div className="inline-flex flex-wrap cf w-100 pa2-ns">
        <CardList Movies={MoviesList} />
      </div>
    </div>
  );
}

//  const [filterList, setFilterList] = useState(Movies);
//  const filterSearch = (event) => {
//    const search = event.target.value;
//    var updatedList = [...Movies];
//    updatedList = updatedList.filter((list) => {
//      return list[0].title.toLowerCase().includes(search.toLowerCase());
//    });
//    setFilterList(updatedList);
//  };

//const fetchMovies = (search) => {
//  return new Promise((resolve) => {
//    setTimeout(() => {
//      const filteringMovies = (search) => {
//        if (search === "") {
//          resolve(Movies);
//          return;
//        }
//        const filteredMovies = Movies.filter((Movie) =>
//          Movie.title.toLowerCase().includes(search.toLowerCase())
//        );
//        resolve(filteredMovies);
//      };
//    }, 2000);
//  });
//};
//
//const filteringMovies = (search) => {
//  if (search === "") {
//    return Movies;
//  }
//  return Movies.filter((Movie) =>
//    Movie.title.toLowerCase().includes(search.toLowerCase())
//  );
//};
//
//function scope
//  useEffect(() => {
//    const filteredMovies = filteringMovies(search);
//    setFilterMovies(filteredMovies);
//  }, [search]);
//<SearchBar callback={(search) => setSearch(search)} />
