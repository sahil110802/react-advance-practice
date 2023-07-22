import React from "react";

const playButton = () => {
  const handleClick = () => {
    console.log("Play");
  };
  return <button onClick={handleClick}>Play</button>;
};

export default playButton;
