import React, {useContext} from "react";
import "./Footer.scss";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const textClass = isDark ? "dark-mode footer-text" : "footer-text";
  return (
    <footer className="footer-div">
      <p className={textClass}>© {new Date().getFullYear()} Rajesh Perumal</p>
    </footer>
  );
}
