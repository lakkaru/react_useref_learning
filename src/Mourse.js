import React, { useEffect, useRef } from "react";

export default function Mourse({ myApp }) {
  const pointsDivRef = useRef();

  // console.log(myDivRef.current);

  useEffect(() => {
    const showPointer = (e) => {
      myApp.current.style.cursor = "pointer";
    };

    pointsDivRef.current.addEventListener("mouseenter", showPointer);
    return () => {
      myApp.current.style.cursor = "auto";
    };
  }, []);

  return (
    <div ref={pointsDivRef}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/013/474/545/original/mouse-click-cursor-set-hand-cursor-click-icon-mouse-pointer-set-arrow-cursor-pointer-click-icon-clicking-cursor-pointing-hand-clicks-and-waiting-loading-icons-website-arrows-or-hand-icon-vector.jpg"
        alt="pointer"
        width={"50px"}
      />
      {/* <img src='https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cute-cartoon-hand-mouse-pointer-icon-image_2292876.jpg' alt='pointer' width={'50px'}/> */}
    </div>
  );
}
