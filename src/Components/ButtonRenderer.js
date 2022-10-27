import React from "react";
import { createArray, debugEnabled } from "../Util/ArrayCreator";
import ArrayRenderer, { reloadArray } from "./ArrayRenderer";
import "../css/ButtonRendererCSS.css";
import { calculateMaxElements, getSliderValue } from "../Util/SizeCalculator";

function ButtonRenderer({ state, setState }) {
  const SIZE = calculateMaxElements();
  return (
    <div className="button-container">
      <button
        className="glow-on-hover"
        onClick={() => {
          setState(createArray(calculateMaxElements()));
          if (debugEnabled) console.log("state: ", state);
        }}
      >
        Generate Array
      </button>
      <button
        onClick={() => {
          console.log(getSliderValue());
        }}
      >
        Start Sorting
      </button>
    </div>
  );
}

export default ButtonRenderer;
