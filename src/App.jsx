import React, { useState } from "react";
import videosDB from "./Data/";
import Counter from "./Counter";
import "./App.css";
import AddVideo from "./AddVideo";
import VideoList from "./VideoList";
const App = () => {
  const [videos, setVideos] = useState(videosDB);
  const [editableVideo, setEditableVideo] = useState(null);
  const addVideos = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };
  const deleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const editVideo = (id) => {
    setEditableVideo(videos.find((video) => video.id === id));
  };

  const updateVideo = (video) => {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideo = [...videos];
    newVideo.splice(index, 1, video);
    setVideos(newVideo);
  };

  return (
    <div className="app" onClick={() => console.log("app")}>
      <AddVideo
        AddVideos={addVideos}
        editableVideo={editableVideo}
        updateVideo={updateVideo}
      />
      <VideoList
        videos={videos}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
      />
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default App;
