import React from "react";
import logo from "../images/ff_logo.png";
const Landing = () => {
  return (
    <div id="landing-page" class="white-text" style={{ textAlign: "center" }}>
      <h2>Feedback Focus</h2>
      <p>
        Feedback from your customers and prospects
        <br />
        ...wherever they may be.
        <br />
      </p>

      <img id="home-page-logo" class="responsive-image" src={logo} alt="logo" />
    </div>
  );
};

export default Landing;
