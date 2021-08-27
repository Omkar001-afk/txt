import React from "react";
import img from "../img/photo-1495001258031-d1b407bc1776.jpg";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to TextUtils</h1>
      <img src={img} alt="TextUtils" />
    </div>
  );
};

export default HomePage;
