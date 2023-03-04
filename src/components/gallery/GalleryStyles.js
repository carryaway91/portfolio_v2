import styled from "styled-components";

export const ProjectImg = styled.img`
  font-size: 0;
  width: 33vw;

  @media (max-width: 1140px) {
    width: 100%;
  }
`;

export const Heading = styled.h1`
  display: none;
  @media (max-width: 1140px) {
    font-size: 3rem;
    display: block;
    color: #565656;
    text-align: center;
  }
`;

export const Frame = styled.div`
  position: relative;
  display: inline-block;
  width: 33.3%;

  @media (max-width: 1140px) {
    width: 100%;
  }
`;

export const Overlay = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  z-index: 2;
  opacity: 0;
  transition: all 0.1s ease-in-out;
  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  p {
    margin: 0;
  }

  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 1140px) {
    width: 100%;
    position: absolute;
  }
`;
