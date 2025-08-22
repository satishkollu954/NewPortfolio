import "./HomePage.css";
import image from "./HomePageEssentials/image.svg";
import Button from "../Button/Button";
import { Parallax } from "react-parallax";
import { useCallback, useContext, useState, useEffect } from "react";
import ThemeContext from "../../themeContext";
const Home = (props) => {
  const cxt = useContext(ThemeContext);
  useEffect(() => {
    const handleScroll = () => {
      const parallaxText = document.getElementById("parallax-text");
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      parallaxText.style.transform = `translateY(${scrollTop * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = (e) => {
    cxt.setNavScroll(true);
    console.log(e.target);
  };
  return (
    <>
      <div onScroll={handleScroll} className={`home-container ${cxt.addDiv}`}>
        <div className="home-wrap" id="home">
          <div className="home-content">
            <p className="greet">━━ HELLO</p>
            <h1>
              I'm <span>Satish</span> Kollu
            </h1>
            <div className="homeSkill">
              <p>I'm a</p>
              <div className="homeSkillSubs">
                <span>ReactJs Developer.</span>
                <span>Full Stack Developer.</span>
                <span>Salesforce Developer.</span>
                <span>Software Engineer.</span>
              </div>{" "}
            </div>
            <a href="#about">
              <Button name="Interested in knowing more →" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
