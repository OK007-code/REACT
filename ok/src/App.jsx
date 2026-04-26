import React from "react";
import Studentinfo from "./Experiment4/Studentinfo";
// import Counter from "./Experiment5/Counter";
// import Form from "./Experiment6/Form";
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
// function App() {
//   return(
//      <>
//       <Counter />
//     </>
//   );
// }

export default App;
// function App() {
//   return (
//     <>
//       <Form />
//     </>
//   );
// }

// export default App;