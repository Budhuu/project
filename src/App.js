import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/header/Header";
import SignupPage from "./components/header/signupPage/SignupPage";
import LoginPage from "./components/header/loginPage/LoginPage";
import Details from "./components/body/programs/details/Details";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupPage" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
