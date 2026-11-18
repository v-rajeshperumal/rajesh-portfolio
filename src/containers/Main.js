import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SplashScreen from "./splashScreen/SplashScreen";
import Hero from "./site/Hero";
import ProductionWork from "./site/ProductionWork";
import HowIBuild from "./site/HowIBuild";
import Experience from "./site/Experience";
import WhatIBuild from "./site/WhatIBuild";
import Skills from "./site/Skills";
import Education from "./site/Education";
import Contact from "./site/Contact";
import BackToTop from "./site/BackToTop";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import "./site/site.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const showSplash = splashScreen.enabled && !reduceMotion;
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(showSplash);

  useEffect(() => {
    if (showSplash) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    }
  }, [showSplash]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode site-root" : "site-root"}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation ? (
          <SplashScreen />
        ) : (
          <>
            <a className="skip-link" href="#main-content">
              Skip to content
            </a>
            <Header />
            <main id="main-content">
              <Hero />
              <ProductionWork />
              <HowIBuild />
              <Experience />
              <WhatIBuild />
              <Skills />
              <Education />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
