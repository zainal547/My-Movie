import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "../pages/HomePages";
import DetailMovie from "../pages/DetailMovie";
import MyFavorite from "../pages/MyFavorite";
import Login from "../pages/Login";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="detail/:movie_id" element={<DetailMovie />} />
          <Route path="favorites" element={<MyFavorite />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<div>404 Error Not Found</div>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
