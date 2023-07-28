import React, { useEffect, useState } from "react";
import "./AddVideo.css";

const initialState = {
  channel: "sahil",
  time: "3 months ago",
  verified: false,
  title: "",
  views: "",
};
const AddVideo = ({ AddVideos, editableVideo, updateVideo }) => {
  const [video, setVideo] = useState(initialState);
  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editableVideo) {
      AddVideos(video);
    } else {
      updateVideo(video);
    }
    setVideo(initialState);
  };

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

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
        <button onClick={handleSubmit}>
          {editableVideo ? "Edit" : "Add"} Video
        </button>
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
