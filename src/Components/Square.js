import React from "react";

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;
  console.log("styleeeeeeee",style)
//   console.log("value : ",value)
//   console.log("onClick : ",onClick)
  return (
    <button className="squares" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;