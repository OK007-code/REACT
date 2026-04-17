import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  };

  const cardStyle = {
    backgroundColor: "#98e7f5",
    padding: "30px",
    margin: "auto",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };
  const headingStyle = {
    color: "#050505",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
         <h2 style={headingStyle}><strong>Counter App</strong></h2>
        <h1>{count}</h1>

        <button
          style={{ ...buttonStyle, backgroundColor: "#4CAF50", color: "white" }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: "#f44336", color: "white" }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          style={{ ...buttonStyle, backgroundColor: "#555", color: "white" }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;