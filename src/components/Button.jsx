import React from "react";

function Button(movie) {
  return (
    <button className="text-white text-lg bg-neutral-500 hover:bg-neutral-700 dark:bg-zinc-800 rounded-md p-2" onClick={movie.onClick} type={movie.type}>
      {movie.label}
    </button>
  );
}

export default Button;
