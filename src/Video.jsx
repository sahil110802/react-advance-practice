import React from "react";
import "./Video.css";
const Video = ({
  title,
  channel = "DEFAULT",
  views,
  time,
  verified = true,
}) => {
  return (
    <div className="parent">
      <div className="pic">
        <img src="https://picsum.photos/id/3/160/90" alt="thumbnail" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">
        {channel}
        {verified && "✅"}
      </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
    </div>
  );
};

export default Video;
