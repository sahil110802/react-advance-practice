import React, { useReducer, useState } from "react";
import videosDB from "./Data/";
import Counter from "./Counter";
import "./App.css";
import AddVideo from "./AddVideo";
import VideoList from "./VideoList";
const App = () => {
  const [editableVideo, setEditableVideo] = useState(null);
  const videoReducer = (videos, action) => {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideo = [...videos];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideo;
      default:
        return videos;
    }
  };
  const [videos, dispatch] = useReducer(videoReducer, videosDB);

  const editVideo = (id) => {
    setEditableVideo(videos.find((video) => video.id === id));
  };

  return (
    <div className="app" onClick={() => console.log("app")}>
      <AddVideo dispatch={dispatch} editableVideo={editableVideo} />
      <VideoList videos={videos} dispatch={dispatch} editVideo={editVideo} />
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default App;
