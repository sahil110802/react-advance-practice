import React from "react";
import "./Video.css";
const Video = ({ bgColor, title }) => {
  let topic = "ReactJS";
  return (
    <div className="parent">
      <img src="" />
      <div style={{ backgroundColor: bgColor }}>{title}</div>
    </div>
  );
};

export default Video;
