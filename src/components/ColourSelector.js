import React from "react";

const ColourSelector = ({ changeColor }) => {

  return (
    <div>

      <button style="background-color:blue" onClick={() => changeColor("red")}>Blue</button>

      <button style="background-color:orange" onClick={() => changeColor("orange")}>Orange</button>

      <button style="background-color:green" onClick={() => changeColor("green")}>Green</button>

    </div>
  );
};

export default ColourSelector;
