import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [name, setName] = useState("");
  const [bgc, setBackgroundColor] = useState("#fff");
  function handleClick() {
    setHeading(heading + " " + name);
  }
  function handleMouseOver() {
    setBackgroundColor("black");
  }

  function handleMouseLeave() {
    setBackgroundColor("#fff");
  }

  function handleChange(event) {
    setHeading("Hello");
    setName(event.target.value);
  }
  return (
    <div className="container">
      <h1>{heading}!</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: bgc }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
