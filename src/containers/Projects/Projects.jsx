import "./projects.css";
import HeadingUnder from "../../components/HeadingDesign/HeadingUnder";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import ecommerce from "./e-commerce.png";
import raagvicare from "./RT.png";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={`projectcard  ${props.align}`}>
      <div className={`project-content`}>
        <div className="text-[92px] font-bold opacity-30">0{props.num}</div>
        <div className="text-[48px] font-bold">{props.title}</div>
        <div className="text-sm">{props.des}</div>
        <div>Tech Stack : {props.tech}</div>
      </div>
      <Link to={props.url}>
        <div className="project-image" data-aos="slide-up">
          <img src={props.img} />
        </div>
      </Link>
    </div>
  );
};
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="projects-container" id="projects">
      <HeadingUnder name="Projects" />
      <div className="project-wrap">
        <Card
          num="1"
          title="E-Commerce"
          des="A scalable e-commerce application with authentication, cart, and payment integration. It provides a seamless shopping experience with secure checkout and real-time order tracking. The system is designed with MVC Pattern, ensuring high performance and easy scalability."
          align="reverse"
          tech="MERN, and a lot 🙂"
          img={ecommerce}
          url={"https://satishkollu.vercel.app"}
        />
        <Card
          num="2"
          title="Hospital App"
          des="A hospital management system with appointment booking, patient records, and online consultations. Built for scalability and real-time data synchronization."
          tech="MERN Stack 🔥"
          img={raagvicare}
          url={"https://raagvicare.vercel.app"}
        />
      </div>
    </div>
  );
};

export default Projects;
