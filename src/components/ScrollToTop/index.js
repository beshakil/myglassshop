import "./index.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = () => (
  <BsFillArrowUpCircleFill
    className="scroll-to-top"
    onClick={() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }}
  />
);

export default ScrollToTop;
