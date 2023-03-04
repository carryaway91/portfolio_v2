import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
  height: 103vh;
  background: linear-gradient(45deg, black, gray);
  display: flex;

  @media (max-width: 1140px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Me = styled.img`
  width: 50%;
  align-self: center;
  border-radius: 0 1rem 1rem 0;

  @media (max-width: 1140px) {
    border-radius: 1rem;
  }
`;

export const Description = styled.div`
  position: relative;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  heigth: 100vh;
  font-size: 1.2vw;
  color: white;

  h3 {
    font-size: 3rem;
  }

  @media (max-width: 1140px) {
    h3 {
      display: none;
    }

    font-size: 1rem;
  }
`;

export const ArrowContainer = styled.div`
  position: relative;
  left: 18vw;
  top: 3vh;
  animation: arrow 1s infinite;

  @keyframes arrow {
    0% {
      top: 3vh;
    }
    50% {
      top: 2vh;
    }
    100% {
      top: 3vh;
    }
  }

  @media (max-width: 1140px) {
    display: none;
  }
`;
