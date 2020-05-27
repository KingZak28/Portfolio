import React from "react";
import "./App.css";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import About from "./Components/About";
import Typist from "react-typist";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Typist>
          <span className="my-custom-class"> Traveler </span>
          <Typist.Backspace count={9} delay={200} />
          <span> Thinker </span>
          <Typist.Backspace count={8} delay={200} />
          <span> Software Engineer </span>
        </Typist>
      </div>
    </div>
  );
}

export default App;
