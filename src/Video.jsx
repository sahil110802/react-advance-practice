import React from "react";
import "./Video.css";

const Video = ({
  id,
  title,
  channel = "DEFAULT",
  views,
  time,
  verified = false,
  children,
}) => {
  return (
    <div className="parent">
      <div className="pic">
        <img src={`https://picsum.photos/id/${id}/160/90`} alt="thumbnail" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">
        {channel}
        {verified && "✅"}
      </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Video;
