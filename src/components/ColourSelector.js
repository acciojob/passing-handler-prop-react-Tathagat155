import React from "react";

const ColourSelector = ({ changeColor }) => {

  return (
    <div>

      <button style={{ backgroundColor: "blue" }} onClick={() => changeColor("red")}>Blue</button>

      <button style={{ backgroundColor: "orange" }} onClick={() => changeColor("orange")}>Orange</button>

      <button style={{ backgroundColor: "green" }} onClick={() => changeColor("green")}>Green</button>

    </div>
  );
};

export default ColourSelector;
