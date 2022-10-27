import * as React from "react";
import "./css/App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";
import { createArray } from "./Util/ArrayCreator";
import ArrayRenderer from "./Components/ArrayRenderer";
import ButtonRenderer from "./Components/ButtonRenderer";
import ResizeListener from "./Util/ResizeListener";

function App() {
  return (
    <div className="App">
      <header>
        <div className="Header-main"></div>
      </header>
      <main>
        <div className="App-main">
          <div className="app-container">
            <ArrayRenderer></ArrayRenderer>
          </div>
        </div>
      </main>
      <ResizeListener></ResizeListener>
    </div>
  );
}

export default App;
