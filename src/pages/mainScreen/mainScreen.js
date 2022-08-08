import './mainScreen.css';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const MainScreen = () => {
    let navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }

    const handleRegister = () => {
        navigate('/register')
    }



    return (
          <div className="buttons-div">
          <Button variant="contained" onClick={handleLogin}>Login</Button><br></br>
          <Button variant="contained" onClick={handleRegister}>Register</Button>
          </div>
      );
}
export default MainScreen;