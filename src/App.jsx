import React from "react";
import Video from "./Video";

const App = () => {
  return (
    <div>
      <Video title={"ReactJs tutorial"} bgColor={"blue"} />
      <Video title={"NodeJs tutorial"} bgColor={"green"} />
    </div>
  );
};

export default App;
