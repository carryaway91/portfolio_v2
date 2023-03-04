import React, { useEffect, useState } from "react";
import {
  Content,
  Link,
  LinkItem,
  Logo,
  RightPanel,
  Wrap,
} from "./MainNavStyles";

const MainNav = ({ bg, removeLinkItem, visible }) => {
  const links = ["about", "websites", "designs"];
  const [active, setActive] = useState("");
  const [nav, setNav] = useState(true);

  useEffect(() => {
    if (removeLinkItem) setActive("");
  }, [removeLinkItem]);
  useEffect(() => {
    if (removeLinkItem) setNav(true);
  }, [visible]);
  useEffect(() => {
    if (removeLinkItem) window.scrollY === 0 && setNav(true);
  }, [window.scrollY]);

  const activate = (part) => {
    setActive(part);
  };
  const scrollUp = () => {
    window.scrollTo(0, 0);
    setNav(true);
    setActive("");
  };

  const hide = () => {
    if (window.scrollY !== 0) setNav(false);
    else setNav(true);
  };
  return (
    <div>
      <Wrap
        bg={bg}
        onMouseEnter={() => setNav(true)}
        nav={nav}
        onMouseLeave={() => hide()}
      >
        <Content>
          <Logo onClick={scrollUp}>peter.</Logo>
          <RightPanel>
            {links &&
              links.map((name, idx) => (
                <LinkItem key={idx}>
                  <Link
                    href={`/#${name}`}
                    onClick={() => activate(`${name}`)}
                    selected={active === `${name}`}
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1, name.length)}
                  </Link>
                </LinkItem>
              ))}
          </RightPanel>
        </Content>
      </Wrap>
      <div style={{ height: "85px" }} />
    </div>
  );
};

export default MainNav;
