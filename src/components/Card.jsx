import React, { Component } from "react";
import Button from "./Button";

class Card extends Component {
  render() {
    return (
      <div className="flex flex-col justify-between bg-zinc-800 p-3 rounded shadow-lg shadow-black cursor-pointer hover:scale-110">
        <img src={this.props.image} alt={this.props.title} height="750" />
        <p className="text-center text-white font-bold">{this.props.title}</p>
        <Button label="Add to favorite" />
      </div>
    );
  }
}

export default Card;

/* 
let strVal = 
*/