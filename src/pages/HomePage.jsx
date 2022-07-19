import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Loading from "../assets/Loading";
async function getMovies(pageNo) {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNo}`);
  console.log(res.data.results);
  return res.data.results;
}
function HomePage() {
  const [movies, setMovies] = useState("Loading");
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    getMovies(pageNo)
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, [pageNo]);
  if (movies === "Loading" || !movies || movies.length === 0)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-700">
        <Loading />
      </div>
    );
  else
    return (
      <div className="bg-gray-700 min-h-screen flex flex-col items-center h-full">
        <NavBar />
        <div className="flex flex-wrap justify-evenly">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
        <div className="w-[250px] mt-5 pb-10 font-bold">
          <button
            className="bg-white rounded-full px-4 mr-2  hover:border-black border-2  hover:font-bold "
            onClick={() => {
              if (pageNo > 1) {
                setMovies("Loading");
                setPageNo(pageNo - 1);
              }
            }}
          >
            Previous
          </button>
          {pageNo}
          <button
            className="bg-white rounded-full px-4 ml-2 hover:border-black border-2  hover:font-bold "
            onClick={() => {
              if (pageNo < 20) {
                setMovies("Loading");
                setPageNo(pageNo + 1);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
}

export default HomePage;
