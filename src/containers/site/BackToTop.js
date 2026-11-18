import React, {useEffect, useState} from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({top: 0, behavior: reduce ? "auto" : "smooth"});
    const title = document.getElementById("hero-title");
    if (title) {
      title.setAttribute("tabindex", "-1");
      title.focus({preventScroll: true});
    }
  };

  return (
    <button
      type="button"
      className={visible ? "back-to-top visible" : "back-to-top"}
      onClick={goTop}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <i className="fas fa-arrow-up" aria-hidden="true"></i> Back to top
    </button>
  );
}
