import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);

  // 🔹 useEffect (API fetch - hidden, just for requirement)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => console.log("API fetched"))  // just logging
      .catch(err => console.log(err));
  }, []);

  // 🔹 Validation
  const validate = () => {
    let newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email.includes("@")) newErrors.email = "Valid email required";
    if (password.length < 6) newErrors.password = "Min 6 characters";

    return newErrors;
  };

  // 🔹 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setUsers([...users, { name, email }]);
      setErrors({});
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div style={{
      backgroundColor: "#ea97cd",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <div style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(167, 229, 236, 0.84)",
        width: "350px",
        textAlign: "center"
      }}>

        <h2 style={{ color: "white", backgroundColor: "#56bce0", padding: "10px", borderRadius: "5px" , fontFamily: "emoji" }}>Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <input 
            name="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", margin: "8px 0", padding: "8px" }}
          />
          <p style={{ color: "red" }}>{errors.name}</p>

          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", margin: "8px 0", padding: "8px" }}
          />
          <p style={{ color: "red" }}>{errors.email}</p>

          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", margin: "8px 0", padding: "8px" }}
          />
          <p style={{ color: "red" }}>{errors.password}</p>

          <button type="submit" style={{
            backgroundColor: "#62eb9f",
            color: "white",
            padding: "8px 15px",
            border: "none",
            marginTop: "10px",
            fontFamily: "emoji"
          }}>
            Register
          </button>

        </form>

        {/* Success Message */}
        {users.length > 0 && (
          <p style={{ color: "green" , fontFamily: "emoji" }}>Registration Successful!</p>
        )}

        {/* Registered Users */}
        <h3>Registered Users</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;