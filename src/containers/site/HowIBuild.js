import React from "react";
import {Fade} from "react-reveal";
import {principles} from "../../portfolio";

export default function HowIBuild() {
  return (
    <section
      className="site-section"
      id="how-i-build"
      aria-labelledby="how-title"
    >
      <h2 id="how-title" className="section-title">
        {principles.title}
      </h2>
      <p className="section-sub">{principles.subtitle}</p>
      <div className="principles-grid">
        {principles.items.map((item, i) => (
          <Fade
            bottom
            distance="20px"
            duration={500}
            delay={(i % 3) * 100}
            key={item.title}
          >
            <div className="card principle">
              <img src={item.image} alt="" className="tile-40" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
