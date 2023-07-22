import React, { useState } from "react";
import Video from "./Video";
import videosDB from "./Data/";
import PlayButton from "./PlayButton";
import Counter from "./Counter";
import "./App.css";
import AddVideo from "./AddVideo";
const App = () => {
  const [videos, setVideos] = useState(videosDB);
  return (
    <div className="app" onClick={() => console.log("app")}>
      <AddVideo />
      <div className="videos">
        {videos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            channel={video.channel}
            time={video.time}
            verified={video.verified}
          >
            <PlayButton
              onPlay={() => console.log("play", video.title)}
              onPause={() => console.log("pause", video.title)}
            >
              {video.title}
            </PlayButton>
          </Video>
        ))}
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default App;
