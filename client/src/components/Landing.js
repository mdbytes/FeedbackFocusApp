import React from "react";
import logo from "../images/ff_logo.png";
const Landing = () => {
  return (
    <div
      id="landing-page"
      class="white-text container"
      style={{ textAlign: "center" }}
    >
      <h2>Feedback Focus</h2>
      <p>
        Feedback from your customers and prospects
        <br />
        ...wherever they may be.
        <br />
      </p>
      <div id="home-page-logo">
        <img class="responsive-image photo" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Landing;
