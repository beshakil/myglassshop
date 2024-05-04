import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook ,
} from "react-icons/ai";
import "./index.css";

const Footer = () => (
  <footer className="footer">
    <p className="footer-text">Myglass made with &#10084; by Shakil Ahmed</p>
    <div className="footer-icons-container">
      <a
        href="https://github.com/beshakil"
        target="_top"
        className="footer-link"
      >
        <AiFillGithub className="footer-social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/beshakil/"
        target="_top"
        className="footer-link"
      >
        <AiFillLinkedin className="footer-social-icon" />
      </a>
      <a
        href="https://www.facebook.com/beshakil/"
        target="_top"
        className="footer-link"
      >
        <AiFillFacebook className="footer-social-icon" />
      </a>
    </div>
  </footer>
);

export default Footer;
