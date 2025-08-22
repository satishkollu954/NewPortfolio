import "./contact.css";
import HeadingUnder from "../../components/HeadingDesign/HeadingUnder";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const SocialBar = () => {
  return (
    <>
      <Link to="mailto:satishkollu954@gmail.com">
        <SiGmail className="icon" />
      </Link>
      <Link to="https://linkedin.com/in/satish-kollu-66a512233">
        <FaLinkedinIn className="icon" />
      </Link>
      {/* <FaFacebookF className='icon'/> */}
      {/* <AiFillInstagram className='icon'/> */}
      <Link to="https://github.com/satishkollu954">
        <FaGithub className="icon" />
      </Link>
    </>
  );
};
const Contact = () => {
  const [textbody, setTextBody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-wrap">
      <div className="contact-container" id="contact">
        <div className="contact-content">
          <div className="cg">
            <div className="contact-greet">Let's Connect!</div>
            <div className="contact-greet-sub">
              Build Bridges, Stay in Touch, and Grow Together!
            </div>
          </div>
          <div className="contact-form">
            {" "}
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setTextBody(e.target.value)}
                type="text"
                placeholder="Enter a Message"
                value={textbody}
              />
              <button>
                <Link
                  to={`mailto:satishkollu954@gmail.com?subject=Mail from our Website?textbody=${textbody}`}
                >
                  Send
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="foo-social">
        <div className="si">
          <SocialBar />
        </div>
        <div className="sn">@satishkollu</div>
      </div>
    </div>
  );
};

export default Contact;
