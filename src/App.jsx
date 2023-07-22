import React from "react";
import Video from "./Video";
import videos from "./Data/";
import PlayButton from "./PlayButton";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          channel={video.channel}
          time={video.time}
          verified={video.verified}
        />
      ))}
      <div>
        <PlayButton />
      </div>
    </div>
  );
};

export default App;
