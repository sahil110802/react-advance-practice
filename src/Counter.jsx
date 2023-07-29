import React, { useRef, useState } from "react";

const counter = () => {
  const [number, setNumber] = useState(0);
  let num = useRef(0);
  const handleClick = (e) => {
    e.stopPropagation();
    // setNumber((number) => number + 1);
    // setNumber((number) => number + 1);
    // setNumber((number) => number + 1);
    num.current++;
    console.log(num.current);
  };
  return (
    <button style={{ width: "2rem" }} onClick={handleClick}>
      {number} {num.current}
    </button>
  );
};

export default counter;
