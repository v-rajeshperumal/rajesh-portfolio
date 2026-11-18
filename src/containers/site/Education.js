import React from "react";
import {education} from "../../portfolio";

export default function Education() {
  return (
    <section
      className="site-section site-section-tight"
      id="education"
      aria-labelledby="edu-title"
    >
      <h2 id="edu-title" className="section-title section-title-sm">
        Education
      </h2>
      <p className="edu-row">
        <i className="fas fa-graduation-cap" aria-hidden="true"></i>
        <strong>{education.degree}</strong>
        <span aria-hidden="true"> · </span>
        <span>{education.school}</span>
        <span aria-hidden="true"> · </span>
        <span>{education.years}</span>
      </p>
    </section>
  );
}
