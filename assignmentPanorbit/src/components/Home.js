import React from "react";
import ProfileCard from "./Card";

const Home = () => {
  return (
    <>
      <img src={require("../images/home.png")} alt="" />
      <ProfileCard />
    </>
  );
};

export default Home;
