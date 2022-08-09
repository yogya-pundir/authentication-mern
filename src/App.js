import { Route, Routes} from "react-router-dom";
import Login from "./pages/login/login";
import MainScreen from "./pages/mainScreen/mainScreen";
import Register from './pages/register/register';
import Welcome from './pages/welcome/welcome';
import "./App.css";
import React, {Fragment} from 'react';

function App() {
  // return (
  //   <div className="container">
  //     <Fragment>
  //     <Routes>
  //       <Route path="/" exact>
  //       <mainScreen></mainScreen>
  //       </Route>
  //       <Route path="/main">
  //         <MainScreen></MainScreen>
  //       </Route>
  //     </Routes>
  //     </Fragment>
  //   </div>
  // );

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/welcome/:id" element={<Welcome/>} />
      </Routes>
    </div>
  );
}

export default App;
