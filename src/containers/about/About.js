import React from "react";
import { ArrowContainer, Description, Heading, Me, Wrap } from "./AboutStyles";
import mePC from "../../img/pc-me.jpg";
import Arrow from "../../img/Arrow";
const About = () => {
  return (
    <Wrap id="about">
      <Heading>About Me</Heading>
      <Me src={mePC} />
      <Description>
        <h3>About</h3>
        <p>
          My name is Peter Babej-Kmec, and I am currently located in Kosice,
          Slovakia. My first encounter with programming was when I was studying
          translation and interpretation in college. It was love at first sight.
          The very idea that you can create something and put it on the internet
          for anyone to see and use was fascinating to me.
        </p>
        <p>
          Right away I started to play around with web design and was searching
          for study materials on the internet when I came across the company
          named Learn2Code, where I completed several courses: web design, SASS,
          React and Vue, SQL, Laravel, and web development. I was also attending
          lectures about frontend development provided by the company Bart.sk.
        </p>
        <p>
          I am interested in everything, basically: frontend, backend, and
          databases, but currently my main focus is on frontend ReactJs
          development.
        </p>
        <ArrowContainer>
          <a href="/#websites">
            <Arrow color="white" w="100" />
          </a>
        </ArrowContainer>
      </Description>
    </Wrap>
  );
};

export default About;
