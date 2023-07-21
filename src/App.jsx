import React from "react";
import Video from "./Video";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <Video title={"ReactJs tutorial"} bgColor={"blue"} />
      <Video title={"NodeJs tutorial"} bgColor={"green"} />
    </div>
  );
};

export default App;
