import React, { useState } from "react";
import videosDB from "./Data/";
import Counter from "./Counter";
import "./App.css";
import AddVideo from "./AddVideo";
import VideoList from "./VideoList";
const App = () => {
  const [videos, setVideos] = useState(videosDB);

  const addVideos = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };
  const deleteVideo = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };
  return (
    <div className="app" onClick={() => console.log("app")}>
      <AddVideo AddVideos={addVideos} />
      <VideoList videos={videos} deleteVideo={deleteVideo} />
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default App;
