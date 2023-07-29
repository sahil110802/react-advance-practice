import React, { useContext } from "react";
import "./Video.css";
import VideoDispatchContext from "./context/VideoDispatchContext";

const Video = ({
  id,
  title,
  channel = "DEFAULT",
  views,
  time,
  verified = false,
  children,
  deleteVideo,
  editVideo,
}) => {
  const dispatch = useContext(VideoDispatchContext);
  return (
    <div className="parent">
      <div>
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
      </div>
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
