import React, { Component } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

class HomePages extends Component {
  // consturctor
  state = {
    title: "-",
    content: "Now Playing in Cinema",
    page: 1,
    datas: [
      {
        id: 1,
        title: "WandaVison Season 1",
        image: "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
      {
        id: 2,
        title: "WandaVison Season 2",
        image: "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
      {
        id: 3,
        title: "WandaVison Season 3",
        image: "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
      {
        id: 4,
        title: "WandaVison Season 4",
        image: "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
      {
        id: 5,
        title: "WandaVison Season 5",
        image: "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
      {
        id: 6,
        title: "WandaVison Season 6",
        image: "https://cdn.europosters.eu/image/750/posters/wandavision-reality-rift-i106807.jpg",
      },
    ],
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
  // ini fungsi yang di jalankan ketika component dimuat
  async fetchData() {
    // setTimeout(() => {
    this.setState(
      {
        title: "Home Test",
      },
      () => {}
    );
    // console.log(this.state.title);
    //}, 2000);
  }

  render() {
    return (
      <>
        <Header />
        <div className="w-full h-screen">
          <p className="text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500 hover:animate-pulse">{this.state.content}</p>
          <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-5 my-2 mx-2 gap-3">
            {this.state.datas.map((data) => (
              <Card key={data.id} title={data.title} image={data.image} />
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
