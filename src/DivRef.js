import React, { useRef, useState } from "react";
import Mourse from "./Mourse";

export default function DivRef({myApp}) {
  const divRef = useRef();
  const bgButtonRef = useRef();

  const [mousePointer, setMoursePointer] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case "bg":
        console.log(divRef.current.style.backgroundColor);

        if (divRef.current.style.backgroundColor === "rgb(51, 51, 51)") {
          divRef.current.style.backgroundColor = "rgb(200, 200, 200)";
          bgButtonRef.current.textContent = "Dark BG";
        } else {
          divRef.current.style.backgroundColor = "rgb(51, 51, 51)";
          bgButtonRef.current.textContent = "Light BG";
        }

        break;
      case "bd":
        if (divRef.current.style.border == "") {
          divRef.current.style.border = "2px solid red";
        } else {
          divRef.current.style.border = "";
        }

        break;
      case "br":
        if (divRef.current.style.borderRadius == "") {
          divRef.current.style.borderRadius = "20px";
        } else {
          divRef.current.style.borderRadius = "";
        }

        break;
      case "gw":
        let curWidth = parseInt(divRef.current.style.width);
        const winWidth = window.innerWidth;
        console.log(curWidth, winWidth);
        if (curWidth === winWidth) {
          divRef.current.style.width = "100px";
        } else if (curWidth * 2 > winWidth) {
          divRef.current.style.width = winWidth + "px";
        } else {
          divRef.current.style.width = curWidth * 2 + "px";
        }

        break;
      case "mp":
        setMoursePointer(!mousePointer);

        break;

      default:
        break;
    }
  };
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <button ref={bgButtonRef} onClick={() => handleClick("bg")}>
          Light BG
        </button>
        <button onClick={() => handleClick("bd")}>Border ON/OFF</button>
        <button onClick={() => handleClick("br")}>Border Radius</button>
        <button onClick={() => handleClick("gw")}>Grow Width Twice</button>
        <button onClick={() => handleClick("mp")}>Mourse Pointer</button>
      </div>
      <div
        ref={divRef}
        style={{
          backgroundColor: "rgb(51, 51, 51)",
          width: "100px",
          height: "100px",
          margin: "0px 10px",
        }}
      ></div>
      {mousePointer?<Mourse myApp={myApp}/>:''}
    </div>
  );
}
