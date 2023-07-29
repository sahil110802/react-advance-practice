import React, { useContext, useReducer, useState } from "react";
import ThemeContext from "./context/ThemeContext";
import videosDB from "./Data/";
import Counter from "./Counter";
import "./App.css";
import AddVideo from "./AddVideo";
import VideoList from "./VideoList";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
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
  const [mode, setMode] = useState("darkMode");
  const editVideo = (id) => {
    setEditableVideo(videos.find((video) => video.id === id));
  };

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`app ${mode}`} onClick={() => console.log("app")}>
            <button
              style={{ width: "5rem" }}
              onClick={() => {
                setMode(mode === "darkMode" ? "lightMode" : "darkMode");
              }}
            >
              MODE
            </button>
            <AddVideo editableVideo={editableVideo} />
            <VideoList editVideo={editVideo} />
            <Counter />
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
