import React, { useState } from "react";
function ColorPicker() {
  const [color, setColor] = useState("#ffffff");
  function handleColorChange(event) {
    setColor(event.target.value);
  }
  const sty = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: color,
    width: "300px",
    height: "300px",
    justifyContent: "center",
    border: "3px solid black",
    borderRadius: "30px",
    marginBottom: "10px",
  };
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>Color Picker</h1>
      <div style={sty}>
        <p>selected color:{color}</p>
      </div>
      <label
        style={{ fontWeight: "bold", fontSize: "2.5em", marginBottom: "10px" }}
      >
        select color
      </label>
      <input
        style={{
          width: "70px",
          height: "50px",
          padding: "5px",
          border: "2px solid gray",
          borderRadius: "2px",
        }}
        type="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
}
export default ColorPicker;
