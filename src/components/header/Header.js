import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {greeting, hero} from "../../portfolio";
import resumePdf from "../../assets/resume/Rajesh_Perumal_Resume.pdf";

function Header() {
  const {isDark} = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a
          href="#top"
          className="logo"
          aria-label="Rajesh Perumal, back to top"
        >
          <span className="grey-color" aria-hidden="true">
            {" "}
            &lt;
          </span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color" aria-hidden="true">
            /&gt;
          </span>
        </a>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          aria-label="Open menu"
        />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <nav aria-label="Main">
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#how-i-build">How I Build</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href={resumePdf} download={hero.resumeFileName}>
                Résumé
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="toggle-item">
              <ToggleSwitch />
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}
export default Header;
