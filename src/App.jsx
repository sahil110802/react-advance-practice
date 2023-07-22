import React from "react";
import Video from "./Video";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <Video title={"ReactJs tutorial"} channel={"sahil"} />
      <Video title={"NodeJs tutorial"} verified={false} />
    </div>
  );
};

export default App;
