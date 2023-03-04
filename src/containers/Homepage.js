import React, { useEffect, useRef, useState } from "react";
import LeftPanel from "../components/leftPanel/LeftPanel";
import MainNav from "../components/mainNav/MainNav";
import RightPanel from "../components/rightPanel/RightPanel";
import Arrow from "../img/Arrow";
import About from "./about/About";
import Designs from "./designs/Designs";
import { Hero, Inner, Rect, ScrollTop, Wrap } from "./HomepageStyles";
import MyWork from "./myWork/MyWork";

const Homepage = () => {
  const [bg, setBg] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const homepage = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      if (window.scrollY > 0) {
        setBg(true);
      } else {
        setBg(false);
      }
      if (window.scrollY > 100) {
        setScrollTop(true);
        removeNavItemActive(false);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const [navItemActive, removeNavItemActive] = useState(false);
  const [nav, setNav] = useState(false);

  const scrollUp = () => {
    window.scrollTo(0, 0);
    removeNavItemActive(true);
    setNav(true);
    setTimeout(() => {
      setNav(false);
    }, 400);
  };
  return (
    <Wrap ref={homepage}>
      <MainNav bg={bg} removeLinkItem={navItemActive} visible={nav} />
      <Hero id="wrap">
        <Inner>
          <LeftPanel />
          <RightPanel />
        </Inner>
      </Hero>
      <Rect />
      <About />
      <MyWork />
      <Designs />
      {scrollTop && (
        <ScrollTop onClick={() => scrollUp()}>
          <div
            style={{
              width: "70%",
              transform: "rotate(180deg)",
              position: "relative",
              top: "-3px",
            }}
          >
            <Arrow width="30" />
          </div>
        </ScrollTop>
      )}
    </Wrap>
  );
};

export default Homepage;
