import React from "react";

const Selection = ({ color }) => {

  const changeColor = (e) => {
    e.target.style.backgroundColor = color;
  };

  return (
    <div>

      <div
        className="fix-box"
        onClick={changeColor}
      >Selection</div>

      <div
        className="fix-box"
        onClick={changeColor}
      >Selection</div>

      <div
        className="fix-box"
        onClick={changeColor}
      >Selection</div>

    </div>
  );
};

export default Selection;
