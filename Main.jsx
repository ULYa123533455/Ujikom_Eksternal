import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";
import "./Main.css";
import "aos/dist/aos.css";

export function Main() {
  return (
    <div className="mainContainer">
      <div className="fixedTop">
        <Carousel />
      </div>
      <div className="mainContent">
        <div data-aos="fade-down" data-aos-offset="100" className="mainKonten">
          <h1>List Of JBL Specs</h1>
          <h4>To Show A List Of WIRELESS JBL's, HEADPHONE JBL's </h4>
          <h5>
            <a href="https://www.youtube.com/channel/UCIyAFhxFOLeRQnShivnifxw">
              THE COMPLETE LIST HERE
            </a>
          </h5>
        </div>
        <div className="subKonten">
          <div data-aos="fade-up" data-aos-offset="100" className="card1">
            <h1>headphone gaming</h1>
            <p> JBL QUANTUM 910 SERIES,JBL QUANTUM 100 P CONSOLE </p>
            <Link className="butto shadowed" to="intel">
              See More
            </Link>
          </div>
          <div data-aos="fade-left" data-aos-offset="100" className="card1">
            <h1>WIRELESS</h1>
            <p> JBL tune beam, JBL wave tour 2 </p>
            <Link className="butto shadowed" to="amd">
              See More
            </Link>
          </div>
        </div>
      </div>
      <Footer className="footer"/>
    </div>
  );
}

export default Main;


