import React, { useContext } from "react";
import Video from "./Video";
import PlayButton from "./PlayButton";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";

const VideoList = ({ deleteVideo, editVideo }) => {
  const videos = useContext(VideosContext);
  const dispatch = useContext(VideoDispatchContext);
  return (
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
          deleteVideo={deleteVideo}
          editVideo={editVideo}
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
  );
};

export default VideoList;
