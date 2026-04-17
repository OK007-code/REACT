import React from "react";
import Studentinfo from "./Experiment4/Studentinfo";

function App() {
  return (
    <div>
      <h1>Student Information</h1>

      <Studentinfo name="Omika" course="B.Tech" marks="95" />
      <Studentinfo name="Rahul" course="B.Com" marks="90" />
      <Studentinfo name="Ananya" course="BCA" marks="88" />

    </div>
  );
}

export default App;