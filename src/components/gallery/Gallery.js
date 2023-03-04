import React, { useState } from "react";
import fb from "../../img/facebook.png";
import ig from "../../img/insta.png";
import weather from "../../img/weather.png";
import todo from "../../img/todo.png";
import mine from "../../img/mine.png";
import cards from "../../img/cards.png";
import mobile from "../../img/mobile.png";
import chatty from "../../img/chatty.png";
import { Frame, Heading, Overlay, ProjectImg } from "./GalleryStyles";

const Gallery = () => {
  const [projects, setProjects] = useState([
    {
      name: "Instagram Clone",
      img: ig,
      link: "https://react-insta-stories-seven.vercel.app/",
      text: "ReactJS, Typescript, Styled-components",
    },
    {
      name: "Facebook Clone",
      img: fb,
      link: "https://react-made-facebook.vercel.app/#/",
      text: "ReactJS, Styled-components",
    },
    {
      name: "Weather.io",
      img: weather,
      link: "https://stupefied-tesla-d7a51f.netlify.app/myLocation",
      text: "ReactJS, Styled-components",
    },
    {
      name: "Remember",
      img: todo,
      link: "https://react-ts-redux.vercel.app/",
      text: "ReactJS, Redux, Typescript, Styled-components",
    },
    {
      name: "Minesweeper",
      img: mine,
      link: "https://minesweeper-tawny.vercel.app/",
      text: "ReactJS, Typescript",
    },
    {
      name: "Memory Card Game",
      img: cards,
      link: "https://memory-game-kappa-ivory.vercel.app/",
      text: "ReactJS, Typescript",
    },
    {
      name: "Call.",
      img: mobile,
      link: "https://react-eshop-89vyr83cm-carryaway91.vercel.app/#/",
      text: "ReactJS, Redux, Firebase, TailwindCSS",
    },
    {
      name: "Chatty",
      img: chatty,
      link: null,
      text: "ReactJS, Laravel, Pusher, Styled-components",
    },
  ]);
  return (
    <div>
      <Heading>Websites</Heading>
      {projects &&
        projects.map((p, idx) => (
          <Frame key={idx}>
            <ProjectImg src={p.img} />
            <Overlay>
              <a href={p.link} style={{ width: "100%", height: "100%" }}>
                {<h3>{p.name}</h3>}
                {<p>{p.text}</p>}
              </a>
            </Overlay>
          </Frame>
        ))}
    </div>
  );
};

export default Gallery;
