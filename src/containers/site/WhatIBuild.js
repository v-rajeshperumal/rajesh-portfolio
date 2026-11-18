import React from "react";
import {Fade} from "react-reveal";
import {whatIBuild} from "../../portfolio";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function WhatIBuild() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return (
    <section
      className="site-section what-i-build"
      id="what-i-build"
      aria-labelledby="wib-title"
    >
      <Fade left distance="24px" duration={800}>
        <div className="wib-visual" aria-hidden="true">
          {reduceMotion ? (
            <img
              alt=""
              src={require("../../assets/images/developerActivity.svg")}
            />
          ) : (
            <DisplayLottie animationData={codingPerson} />
          )}
        </div>
      </Fade>
      <Fade right distance="24px" duration={800}>
        <div className="wib-text">
          <h2 id="wib-title" className="section-title">
            {whatIBuild.title}
          </h2>
          <p className="wib-sub">{whatIBuild.subtitle}</p>
          <ul className="wib-icons">
            {whatIBuild.icons.map(s => (
              <li key={s.name}>
                <i className={s.icon} aria-hidden="true"></i>
                <span>{s.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Fade>
    </section>
  );
}
