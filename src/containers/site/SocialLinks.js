import React from "react";
import {socialMediaLinks} from "../../portfolio";

export default function SocialLinks() {
  if (!socialMediaLinks.display) return null;
  return (
    <ul className="social-links" aria-label="Profiles">
      {socialMediaLinks.github && (
        <li>
          <a
            href={socialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
      )}
      {socialMediaLinks.linkedin && (
        <li>
          <a
            href={socialMediaLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          </a>
        </li>
      )}
      {socialMediaLinks.gmail && (
        <li>
          <a
            href={`mailto:${socialMediaLinks.gmail}`}
            aria-label={`Email ${socialMediaLinks.gmail}`}
          >
            <i className="fas fa-envelope" aria-hidden="true"></i>
          </a>
        </li>
      )}
    </ul>
  );
}
