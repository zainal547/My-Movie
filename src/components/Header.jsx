import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="sticky top-0 w-full border-gray-200 sm:px-4 py-2.5 bg-slate-800 flex justify-between">
        <h1 className="hover:animate-bounce hover:duration-1000">
          <Link to="/" className="text-white text-2xl hover:text-sky-400">
            Zain Movie
          </Link>
        </h1>
        <Link to="/login" className="text-white text-xl text-right">
          Login
        </Link>
      </nav>
    );
  }
}
