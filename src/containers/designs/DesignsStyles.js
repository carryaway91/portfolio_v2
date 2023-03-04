import styled from "styled-components";

export const Wrap = styled.div`
  padding-top: 84px;
  height: 100vh;
  background: linear-gradient(45deg, black, transparent);
  flex-wrap: wrap;
  justify-items: flex-end;

  @media (max-width: 1140px) {
    height: auto;
    padding-top: 0;
  }
  @media (max-width: 1200px) {
    justify-items: center;
  }
`;

export const Overlay = styled.div`
  z-index: 1000000000;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
`;

export const Inner = styled.div`
  width: 33.3%;
  display: flex;
  float: left;
  align-tems: center;
  background: black;

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
