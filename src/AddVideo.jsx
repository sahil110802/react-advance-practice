import React, { useState } from "react";
import "./AddVideo.css";

const initialState = {
  channel: "sahil",
  time: "3 months ago",
  verified: false,
  title: "",
  views: "",
};
const AddVideo = ({ AddVideos }) => {
  const [video, setVideo] = useState(initialState);
  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    AddVideos(video);
    setVideo(initialState);
  };
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="title"
          value={video.title}
        ></input>

        <input
          onChange={handleChange}
          type="text"
          name="views"
          placeholder="views"
          value={video.views}
        ></input>
        <button onClick={handleSubmit}>Add Video</button>
      </form>
    </div>
  );
};

// <button
//         style={{ width: "7rem" }}
//         onClick={() => {
//           setVideos([
//             ...videos,
//             {
//               id: videos.length + 1,
//               title: "ReactJS",
//               channel: "sahil",
//               views: "69K",
//               time: "3 months ago",
//               verified: false,
//             },
//           ]);
//         }}
//       ></button>

export default AddVideo;
