import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { authActions } from '../../store/index';
const Login = () => {
    const dispatch = useDispatch();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    console.log("email", email);
    console.log("password", password);
    const reqObj = {
      email: email,
      password: password,
    };

    const result = await fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify(reqObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.status == 200) {
      const data = result.json();

      data.then((resp) => {
        console.log(resp);
        dispatch(authActions.setAuthState(resp[0]));
        navigate("/welcome/" + resp[0]._id);
      });
    }
  };

  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Login</h3>

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
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
