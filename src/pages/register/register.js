import "./register.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    console.log("email", email);
    console.log("password", password);
    const reqObj = {
      username: username,
      email: email,
      password: password,
    };

    const result = await fetch("http://localhost:8000/signup", {
      method: "POST",
      body: JSON.stringify(reqObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("result", result);
    if (result.status == 200) {
      const data = result.json();

      data.then((resp) => {
        console.log(resp);
        navigate("/");
      });
    }
  };

  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Register</h3>

        <label>User Name:</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <label>Email address:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
