import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/sign-in" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
