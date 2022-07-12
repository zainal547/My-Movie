import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="sticky top-0 w-full border-gray-200 sm:px-4 py-2.5 bg-slate-800">
        <div>
          <h1 className="text-center text-white text-2xl hover:text-sky-500">Zain Movie</h1>
        </div>
      </nav>
    );
  }
}
