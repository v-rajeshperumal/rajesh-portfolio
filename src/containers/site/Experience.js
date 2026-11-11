import React from "react";
import {Fade} from "react-reveal";
import {experience} from "../../portfolio";

export default function Experience() {
  return (
    <section
      className="site-section"
      id="experience"
      aria-labelledby="exp-title"
    >
      <h2 id="exp-title" className="section-title">
        {experience.title}
      </h2>
      <ol className="timeline">
        {experience.roles.map(r => (
          <li className="timeline-item" key={r.company + r.date}>
            <Fade left distance="16px" duration={500}>
              <div className="timeline-row">
                <img src={r.badge} alt="" className="timeline-badge" />
                <div className="timeline-body">
                  <h3>{r.role}</h3>
                  <p className="timeline-meta">
                    <span>{r.company}</span>
                    <span aria-hidden="true"> · </span>
                    <span>{r.date}</span>
                  </p>
                  <p>{r.desc}</p>
                  {r.linkToWork && (
                    <a className="text-link" href="#work">
                      See production work ↑
                    </a>
                  )}
                </div>
              </div>
            </Fade>
          </li>
        ))}
      </ol>
    </section>
  );
}
