import React, { useRef, useState } from "react";

export default function Home() {
 
  const [info, setInfo] = useState({});
  const cusDivRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();

  //   console.log(cusDivRef.current.style);

  const clearFields = () => {
    nameRef.current.value='';
    emailRef.current.value='';
    addressRef.current.value='';
    setInfo({
        name:'',
        email:'',
        address:'',
  });
  };
  const getInfo = () => {
    setInfo({
      name: nameRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
    });
  };
  const toggleColor = (curColor) => {
    if (curColor === "rgb(255, 255, 255)") {
      return "rgb(100, 100, 100)";
    } else {
      return "rgb(255, 255, 255)";
    }
  };
  const changeDisMode = () => {
    cusDivRef.current.style.backgroundColor = toggleColor(
      cusDivRef.current.style.backgroundColor.toString()
    );
  };

  return (
    <div ref={cusDivRef} style={{ backgroundColor: "#fff" }}>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={clearFields}>Clear Fields</button>
        <button onClick={changeDisMode}>Light/Dark Mode</button>
      </div>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          autoFocus
          placeholder="Enter your Name"
        />
      </div>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          type="text"
          id="email"
          placeholder="Enter your Email"
        />
      </div>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <label htmlFor="address">Address</label>
        <input
          ref={addressRef}
          type="text"
          id="address"
          placeholder="Enter your Address"
        />
      </div>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={getInfo}>Show Info</button>
        {/* <button>Change Div Color</button> */}
      </div>
      <div
        style={{
          backgroundColor: "teal",
          display: "flex",
          flexDirection:'column',
          alignItems: "flex-start",
          padding:'10px',
          marginTop:'10px',
        }}
      >
        {/* <div> */}
          <p>Name : {info.name}</p>
          <p>Email : {info.email}</p>
          <p>Address : {info.address}</p>
        {/* </div> */}
      </div>
    </div>
  );
}
