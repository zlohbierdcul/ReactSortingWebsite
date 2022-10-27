import Slider from "../Components/SliderComponent";

const height = window.innerHeight;
const width = window.innerWidth;


export function calculateMaxElements() {
  const canvasHeight = Math.floor(height * 0.7);
  const canvasWidth = Math.floor(width * 0.8);
  const maxElementsHeight = canvasHeight / 2;
  const maxElementsWidth = canvasWidth / 4;

  console.log(canvasWidth, canvasHeight);
  console.log([maxElementsHeight, maxElementsWidth]);
  return maxElementsWidth;
}

export function getBarMultiplyer() {
  const canvasHeight = Math.floor(height * 0.7);

  const BARS = calculateMaxElements();
  const MULTIPLYER = canvasHeight / BARS;

  console.log(MULTIPLYER);
  return MULTIPLYER;
}

export function getSliderValue() {
  const SliderValue = 10;
  return SliderValue;
}
