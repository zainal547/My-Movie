import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { WithRouter } from "../utils/Navigation";

const Card = (props) => {
  return (
    <div className="flex flex-col justify-between bg-zinc-800 p-3 rounded shadow-lg shadow-black cursor-pointer hover:scale-110">
      <Link to={`detail/${props.data.id}`}>
        <img src={props.data.poster_path ? `https://image.tmdb.org/t/p/w500${props.data.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"} alt={props.data.title} height="750" />
        <p className="text-center text-white font-bold">{props.data.title}</p>
        <p className="text-center text-white font-bold">⭐{props.data.vote_average}/10</p>
      </Link>
      <Button label="Add to favorite" onClick={() => props.navigate(`/detail/${props.data.id}`)} />
    </div>
  );
};

export default WithRouter(Card);

/* 
let strVal = 
*/
