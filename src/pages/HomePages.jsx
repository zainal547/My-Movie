import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import Header from "../components/Header";
import { WithRouter } from "../utils/Navigation";

const HomePages = () => {
  // consturctor
  const [title, setTitle] = useState("-");
  const [content, setContent] = useState("Now Playing in Cinema");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(false);

  /*
  sifat dari state
   1. asynchronous, artinya dia tidak bisa langsung dipakai
   2.ketika value di rubah, maka dia melakukan re-rendering
   3. selain dibaca, sebuah state bisa dirubah value-nya
   */

  //side Effect
  //useEffect di pnaggil sekali setiap komponen di muat
  useEffect(() => {
    fetchData();
  }, []);

  // ini fungsi yang di jalankan ketika component dimuat axios
  const fetchData = async (page) => {
    setLoading(true);
    await axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((response) => {
        const { results } = response.data;
        if (results) {
          setMovies(results);
          setPage(2);
          fetchData(1);
        }
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  };

  // handleScroll = (e) => {
  //   let element = e.target;
  //   const bottom = element.scrollHeight - element.scrollTop === element.clientHeight;
  //   if (bottom) {
  //     this.fetchData(this.state.page);
  //   }
  // };

  return (
    <div className="w-full h-screen overflow-auto">
      <Header />
      <p className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500 hover:animate-pulse">{content}</p>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 my-2 mx-2 gap-3">
        {movies.map((movies) => (
          <Card key={movies.id} data={movies} />
        ))}
      </div>
    </div>
  );
};
export default WithRouter(HomePages);

/* 
let strVal = 
*/

// konsumsi Api Menggunakan Fetch API
// async fetchData2() {
//   this.setState({ loading: true });
//   let config = {
//     method: "get",
//     url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   axios(config)
//     .then((response) => {
//       const { results } = response.data;
//       console.log(results);
//     })
//     .catch((err) => {
//       alert(err.toString());
//     })
//     .finally(() => this.setState({ loading: false }));
// }
