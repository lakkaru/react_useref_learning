import './App.css';
import DivRef from './DivRef';
import Home from './Home';
import Mourse from './Mourse';
import React, { useRef } from 'react';

function App() {
  const myApp=useRef();
  return (
    <div ref={myApp} className="App">
      <Home/>
      <hr/>
      <DivRef myApp={myApp}/>
      {/* <Mourse/> */}
    </div>
  );
}

export default App;
