import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
    height: 100vh;
    background: linear-gradient(45deg, black, gray);
    display: flex;
`

export const Me = styled.img`
    width: 50%;
    align-self: center;
    border-radius: 0 1rem 1rem 0
`

export const Description = styled.div`
    position: relative;
    top: -2vh;
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
`

export const ArrowContainer = styled.div`
  position: relative;
  left: 18vw;
  top: 3vh;
  animation: arrow 1s infinite;

  @keyframes arrow {
    0% {
        top: 3vh
    }
    50% {
        top: 2vh
    }
    100% {
        top: 3vh
    }
  }
`

