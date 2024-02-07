import React from "react";
import { Link } from "react-router-dom";
import "./AboutPageStyle.css";
import img1 from "../assets/[008729].jpg";
const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          My name is Corneliu Olaru, 22 y.o and I am a junior Front-End Developer
          that creates responsive secure websites.
        </p>
       
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <img src={img1} alt="cover"  className="img"/>
      </div>
    </div>
  );
};

export default AboutPage;
