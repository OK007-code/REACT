import React from 'react'

function Studentinfo(prop) {
  const cardStyle = {
    backgroundColor: "#ff9a9a",
    padding: "20px",
    margin: "15px auto",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  };

  const headingStyle = {
    color: "#fd3333",
    marginBottom: "10px"
  };

  const textStyle = {
    color: "#000000",
    fontSize: "16px",
    margin: "5px 0"
  };

  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>STUDENT DETAILS</h2>
      <p style={textStyle}>Name: {prop.name}</p>
      <p style={textStyle}>Marks: {prop.marks}</p>
      <p style={textStyle}>Course: {prop.course}</p>
    </div>
  );
}

export default Studentinfo;