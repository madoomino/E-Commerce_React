import React from "react";
import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Signin from "./routes/Login/Login";
import Login from "./routes/Login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>Shop Page</h1>} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
