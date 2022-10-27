import React, { useState } from "react";
import { calculateMaxElements } from "../Util/SizeCalculator";
import "../css/SliderStyle.css";

export default function Slider() {
  const MAX_SIZE = calculateMaxElements();
  const [state, setState] = useState(MAX_SIZE);

  return (
    <>
      <input
        id="mySlider"
        type="range"
        min="10"
        max={MAX_SIZE}
        step="10"
        // value={state}
      ></input>
    </>
  );
}
