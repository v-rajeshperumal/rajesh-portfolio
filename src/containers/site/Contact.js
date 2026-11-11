import React from "react";
import {contactInfo} from "../../portfolio";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section
      className="site-section contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title" className="section-title">
        <i className="fas fa-envelope" aria-hidden="true"></i>{" "}
        {contactInfo.title}
      </h2>
      <p className="section-sub">{contactInfo.subtitle}</p>
      <a className="contact-email" href={`mailto:${contactInfo.email_address}`}>
        {contactInfo.email_address}
      </a>
      <SocialLinks />
    </section>
  );
}
