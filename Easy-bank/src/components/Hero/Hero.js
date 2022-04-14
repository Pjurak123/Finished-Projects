import React, { useEffect, useState } from "react";
import mobiledImg from "../../images/bg-intro-mobile.svg";
import desktopImg from "../../images/bg-intro-desktop.svg";
import phoneImg from "../../images/image-mockups.png";
import "./Hero.css";

function Hero() {
  const [desktop, setDesktop] = useState(window.innerWidth > 767);

  const updateImage = () => {
    setDesktop(window.innerWidth > 767);
  };

  useEffect(() => {
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  });

  return (
    <div className="hero-container">
      <div className="row-hero">
        <div className="image-container">
          {desktop ? (
            <img src={desktopImg} alt="desktop-bg" className="bg-image" />
          ) : (
            <img src={mobiledImg} alt="mobile-bg" className="bg-image" />
          )}
          <img src={phoneImg} alt="phone-img" className="phone-image" />
        </div>
        <div className="text-container">
          <h1 className="title">Next generation digital banking</h1>
          <p className="text">
            Take your financial life online. Your Easybank account will be a
            one-stop shop for spending, saving, budgeting, investing and much
            more.
          </p>
          <button className="hero-button">Request Invite</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
