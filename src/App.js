import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home';
import './App.css'
import Main from './components/main';
import React, { useState } from 'react';

function App() {
  

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e) => {
    const newX = e.clientX;
    const newY = e.clientY;
    setX(newX);
    setY(newY);
    
  };
  window.addEventListener('mousemove', handleMouseMove);
  const boxStyle = {
    position: 'absolute',
    left: x-15 + 'px',
    top: y+5 + 'px',
    width: '30px',
    height: '30px',
    
    
  };
 
  return (
    <>
    <div id='box1' style={boxStyle} ></div>
    <div class="noise"></div>
      <Main></Main>
      <Home />
      
      </>
  );
}

export default App;
