import React from "react";
import "./Video.css";
const Video = ({ title, channel, views, time }) => {
  let topic = "ReactJS";
  return (
    <div className="parent">
      <div className="pic">
        <img src="https://picsum.photos/id/2/160/90" alt="thumbnail" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
    </div>
  );
};

export default Video;
