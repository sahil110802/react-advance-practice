import React, { useState } from "react";

const counter = () => {
  const [number, setNumber] = useState(0);
  const handleClick = (e) => {
    e.stopPropagation();
    setNumber(number + 1);
  };
  return <button onClick={handleClick}>{number}</button>;
};

export default counter;
