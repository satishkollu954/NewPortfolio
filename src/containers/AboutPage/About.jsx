import { useEffect } from "react";
import Button from "../../components/Button/Button";
import HeadingUnder from "../../components/HeadingDesign/HeadingUnder";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { SocialBar } from "../Contact/Contact";
const About = () => {
  const right = "< ";
  const left = " />";
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="about-container" id="about">
      <HeadingUnder name="` About ` " />
      <div className="about-wrap" data-aos="fade-up">
        <div className="name">Satish Kollu</div>
        <div className="content">
          I am a <span>Software Engineer</span> worked on many cool products.
        </div>
        <div className="content">
          I am into {right}
          <span>WEB DEVELOPMENT</span>
          {left}
          <span> && SOFTWARE TECHOLOGIES</span>.
        </div>
        <div className="aboutC">
          I am a passionate and dedicated web developer with a strong foundation
          in full-stack development. I possess a solid understanding of software
          development. I can build web applications ❤️.
        </div>
        <div className="flex gap-10">
          <SocialBar />
        </div>
        <a href="#skills">
          <Button name=" About my Skills →" />
        </a>
      </div>
    </div>
  );
};

export default About;
