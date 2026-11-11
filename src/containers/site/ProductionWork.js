import React from "react";
import {Fade} from "react-reveal";
import {productionWork} from "../../portfolio";

export default function ProductionWork() {
  return (
    <section className="site-section" id="work" aria-labelledby="work-title">
      <h2 id="work-title" className="section-title">
        {productionWork.title}
      </h2>
      <p className="section-sub">{productionWork.subtitle}</p>
      <div className="work-grid">
        {productionWork.projects.map((p, i) => (
          <Fade
            bottom
            distance="24px"
            duration={600}
            delay={i * 120}
            key={p.name}
          >
            <article className="card work-card">
              <div className="card-head">
                <img src={p.image} alt="" className="tile-56" />
                <h3>{p.name}</h3>
              </div>
              <h4 className="card-label">Problem</h4>
              <p>{p.problem}</p>
              <h4 className="card-label">What I built</h4>
              <ul className="bullets">
                {p.built.map(b => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <h4 className="card-label">Result</h4>
              <ul className="results">
                {p.results.map(r => (
                  <li key={r}>
                    <i className="fas fa-check" aria-hidden="true"></i>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <ul className="chips" aria-label={`${p.name} tech stack`}>
                {p.stack.map(s => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          </Fade>
        ))}
      </div>
    </section>
  );
}
