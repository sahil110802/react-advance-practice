import React, { useState } from "react";
import "./AddVideo.css";
const AddVideo = () => {
  const [video, setVideo] = useState({
    channel: "sahil",
    time: "3 months ago",
    verified: false,
  });
  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(video);
  };
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="title"
        ></input>
        {video.title}
        <input
          onChange={handleChange}
          type="text"
          name="views"
          placeholder="views"
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
