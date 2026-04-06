import React, { useState } from "react";
import '../styles/App.css';
import Selection from './Selection';
import ColourSelector from './ColourSelector';

const App = () => {
  const [color, setColor] = useState("");

  const changeColor = (newColor) => {
    setColor(newColor);
  };
  return (
    <div id="master">
      <h5 className="heading">Select the gradient and then the Box to change the color</h5>

      <div className="row">
       
          <ColourSelectorchangeColor={changeColor}  />
       
      </div>

      <div className='row' id="children-wrapper">
            <Selection color={color} } />
      </div>
    </div >
  )
}


export default App;
