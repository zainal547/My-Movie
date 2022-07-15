// import React, { useEffect, useState } from "react";
// import { WithRouter } from "../utils/Navigation";
// import axios from "axios";
// import Header from "../components/Header";

// const DetailMovie = (props)=> {
//   const [detailMovie, setDetailMovie] = useState({});
//   const [loading, setLoading] = useState(true);
//   };
//   componentDidMount() {
//     console.log(this.props);
//     this.fetchData();
//   }
//   setLoading (true);
//   const {movie_id}  = props.params(){
//     const { movie_id } = this.props.params;
//     await axios
//       .get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
//       .then((response) => {
//         const { data } = response;
//         setDetailMovie(data);
//         SetVideos(data.videos.results);
//       })
//       .catch((err) => {
//         alert(err.toString());
//       })
//       .finally(() => setLoading(false));
//   }

//     if (this.state.loading) {
//       return <div>Loading...</div>;
//     }
//     return (
//       <div>
//         <Header />
//         <p>{videos.map((video) =>(

//         ))}</p>
//       </div>
//     );

// export default WithRouter(DetailMovie);
