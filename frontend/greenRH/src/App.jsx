import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import SideBar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
