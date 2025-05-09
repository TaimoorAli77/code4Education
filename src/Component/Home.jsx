import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const urlInfo = (address) => {
    navigate(address);
    console.log(address);
  };
  const check = (ab) => {
    if (ab) {
      navigate("/user");
    } else {
      navigate("/geturl");
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => urlInfo("/about")}>Go to About </button>
      <button onClick={() => urlInfo("/")}>Go to Home </button>
      <button onClick={() => check(true)}>Go to User List </button>
      <button onClick={() => check(false)}>Go to geturl </button>
      <button onClick={() => navigate(-1)}>Go to Last Page</button>
    </div>
  );
};

export default Home;
