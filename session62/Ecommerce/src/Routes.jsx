import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./Home";
import Product from "./Product";
import Navbar from "./Navbar";
import AllComponents from './AllComponent';
import Register from "./Signup/Register";
import Cart from './cart';
import Profile from "./Profile";

export default function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="buyer" element={<AllComponents />}>
          <Route index element={<Example />} />
          <Route path="pro" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
