import React, { useEffect, useState } from 'react';
// import { resize } from "./SizeCalculator";

function debounce(fn, ms) {
   let timer;
   return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
         timer = null;
         fn.apply(this, arguments);
      });
   };
}

function ResizeListener() {
   const [dimensions, setDimensions] = useState({
      height: window.innerHeight,
      width: window.innerWidth,
   });

   useEffect(() => {
      const debounceHandleResize = debounce(function handleResize() {
         setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
         });
      }, 1000);

      window.addEventListener('resize', debounceHandleResize);
      // resize = true;

      return (_) => {
         console.log('resize');
         window.removeEventListener('resize', debounceHandleResize);
         // resize = false;
      };
   });

   return (
      <div>
         rendered at: x: {dimensions.width} y: {dimensions.height}
      </div>
   );
}

export default ResizeListener;
