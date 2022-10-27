import React, { useRef, useState } from 'react';
import { createArray, debugEnabled } from '../Util/ArrayCreator';
import '../css/ArrayRendererCSS.css';
import ButtonRenderer from './ButtonRenderer';
import { calculateMaxElements, getBarMultiplyer } from '../Util/SizeCalculator';
import Slider from './SliderComponent';

export let resize = false;

function ArrayRender() {
   const [array, setArray] = useState([]);

   const MAX_SIZE = calculateMaxElements();
   const BAR_MULITPLYER = getBarMultiplyer();
   let didMount = useRef(false);

   React.useEffect(() => {
      if (!didMount.current) {
         const arr = createArray(MAX_SIZE);
         setArray(arr);
         console.log('Mounted! With state: ', array);
         didMount.current = true;
      }
   }, [MAX_SIZE, array]);

   return (
      <>
         <Slider></Slider>
         <div className="array-container">
            {array.map((value, idx) => (
               <div
                  className="array-bar"
                  key={idx}
                  style={{ height: `${value * BAR_MULITPLYER}px` }}
               ></div>
            ))}
         </div>
         <ButtonRenderer state={array} setState={setArray}></ButtonRenderer>
      </>
   );
}

export default ArrayRender;

// export default class ArrayRenderer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       array: [],
//     };
//   }

//   componentDidMount() {
//     this.reloadArray();
//   }

//   reloadArray() {
//     const array = createArray(150);
//     console.log("foo");

//     this.setState({ array });
//     if (debugEnabled) console.log("state: ", this.state);
//   }

//   render() {
//     const { array } = this.state;

//     return (
//       <>
//         <ButtonRenderer></ButtonRenderer>
//         <div className="array-container">
//           {array.map((value, idx) => (
//             <div
//               className="array-bar"
//               key={idx}
//               style={{ height: `${value * 2}px` }}
//             ></div>
//           ))}
//         </div>
//       </>
//     );
//   }
// }
