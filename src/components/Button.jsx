import React from "react";

const Button = (props) => {
  return (
    <button className="text-white text-lg bg-neutral-500 hover:bg-neutral-700 dark:bg-zinc-800 rounded-md p-2" onClick={props.onClick} type={props.type}>
      {props.label}
    </button>
  );
};

export default Button;
