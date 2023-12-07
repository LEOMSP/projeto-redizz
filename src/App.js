import React, { useState } from 'react';
import './App.css';

function App() {
  const [circles, setCircles] = useState([]);
  const [undoneCircles, setUndoneCircles] = useState([]);

  const handleCanvasClick = (event) => {
    const { clientX, clientY } = event;
    const newCircle = { x: clientX, y: clientY };
    setCircles([...circles, newCircle]);
  };

  const handleUndoClick = () => {
    const lastCircle = circles[circles.length - 1];
    setCircles(circles.slice(0, -1));
    setUndoneCircles([...undoneCircles, lastCircle]);
  };

  const handleRedoClick = () => {
    const lastUndoneCircle = undoneCircles[undoneCircles.length - 1];
    setCircles([...circles, lastUndoneCircle]);
    setUndoneCircles(undoneCircles.slice(0, -1));
  }

  return (
    <div className="App">
      <div>
        <div
          className="canvas"
          onClick={handleCanvasClick}
          style={{ 
            position: 'relative', 
            width: '500px', 
            height: '500px', 
            border: '2px solid black' 
          }}
        >
          {circles.map((circle, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                left: circle.x - 10,
                top: circle.y - 10,
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: 'red',
              }}
            ></div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={handleUndoClick}>Desfazer</button>
        <button onClick={handleRedoClick}>Refazer</button>
      </div>
    </div>
  );
}

export default App;
