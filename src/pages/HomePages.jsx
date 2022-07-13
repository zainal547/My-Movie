import React, { Component } from "react";
import Card from "../components/Card";
import axios from "axios";
import Header from "../components/Header";

class HomePages extends Component {
  // consturctor
  state = {
    title: "-",
    content: "Now Playing in Cinema",
    page: 1,
    datas: [],
    information: {},
    loading: false,
  };
  /*
  sifat dari state
   1. asynchronous, artinya dia tidak bisa langsung dipakai
   2.ketika value di rubah, maka dia melakukan re-rendering
   3. selain dibaca, sebuah state bisa dirubah value-nya
   */

  //side Effect
  async componentDidMount() {
    await this.fetchData();
  }
  // ini fungsi yang di jalankan ketika component dimuat axios
  async fetchData() {
    this.setState({ loading: true });
    await axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then((response) => {
        const { results } = response.data;
        console.log(results);
        //let temp = results.slice();
        this.setState({ datas: results });
        //this.setState({ datas: temp });
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  // konsumsi Api Menggunakan Fetch API
  async fetchData2() {
    this.setState({ loading: true });
    let config = {
      method: "get",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then((response) => {
        const { results } = response.data;
        console.log(results);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <>
        <Header />
        <div className="w-full h-screen">
          <p className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500 hover:animate-pulse">{this.state.content}</p>
          <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 my-2 mx-2 gap-3">
            {this.state.datas.map((data) => (
              <Card key={data.id} title={data.title} image={data.poster_path} vote_average={data.vote_average} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default HomePages;

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
