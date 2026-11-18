import React from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import {hero} from "../../portfolio";
import resumePdf from "../../assets/resume/Rajesh_Perumal_Resume.pdf";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return (
    <section
      className="site-section hero"
      id="top"
      aria-labelledby="hero-title"
    >
      <Fade bottom distance="24px" duration={700}>
        <div className="hero-text">
          <h1 id="hero-title" className="hero-title">
            {hero.title}{" "}
            <span className="wave" role="img" aria-label="waving hand">
              {emoji("👋")}
            </span>
          </h1>
          <p className="hero-sub">{hero.subTitle}</p>
          <p className="hero-open">{hero.openTo}</p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={resumePdf}
              download={hero.resumeFileName}
            >
              <i className="fas fa-file-download" aria-hidden="true"></i>
              Download résumé
            </a>
            <a className="btn btn-secondary" href="#work">
              See my work
            </a>
            <a className="btn-link" href="#contact">
              Contact
            </a>
          </div>
          <SocialLinks />
        </div>
      </Fade>
      <div className="hero-visual" aria-hidden="true">
        {reduceMotion ? (
          <img alt="" src={require("../../assets/images/manOnTable.svg")} />
        ) : (
          <DisplayLottie animationData={landingPerson} />
        )}
      </div>
    </section>
  );
}
