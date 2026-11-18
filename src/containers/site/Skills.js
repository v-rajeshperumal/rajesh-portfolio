import React from "react";
import {Fade} from "react-reveal";
import {skillGroups} from "../../portfolio";

export default function Skills() {
  return (
    <section
      className="site-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <h2 id="skills-title" className="section-title">
        {skillGroups.title}
      </h2>
      <div className="skills-grid">
        {skillGroups.groups.map((g, i) => (
          <Fade
            bottom
            distance="16px"
            duration={500}
            delay={(i % 2) * 100}
            key={g.name}
          >
            <div className="skill-group">
              <h3>{g.name}</h3>
              <ul className="chips">
                {g.skills.map(s => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
