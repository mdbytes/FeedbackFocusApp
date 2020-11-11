import React from "react";
import logo from "../images/ff_logo.png";
const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Feedback Focus</h2>
      <p>Collect feedback from your customers, clients, and prospects.</p>

      <img id="home-page-logo" class="responsive-image" src={logo} alt="logo" />
    </div>
  );
};

export default Landing;
