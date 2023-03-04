import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
`;

export const Hero = styled.div`
  width: 90%;
  position: relative;
  margin: 0 auto;
  height: calc(100vh - 85px);
`;

export const Rect = styled.div`
  position: absolute;
  width: 135rem;
  height: 110vh;
  left: -10rem;
  background: #d5d5d5;
  transform: rotate(131deg);
  z-index: -2;
`;
export const ScrollTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4vw;
  height: 4vw;
  position: fixed;
  border-radius: 50%;
  background: #ffffff;
  bottom: 2vh;
  right: 2vw;
  z-index: 210;
  cursor: pointer;

  @media (max-width: 1140px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1140px) and (min-height: 578px) {
    flex-direction: column;
    margin-top: 10vh;
    width: 80%;
    margin: 0 auto;

    h2 {
      font-size: 6rem;
    }

    p {
      margin: 0;
      font-size: 4rem;
    }
  }

  @media (max-width: 1000px) and (min-height: 578px) {
    h2 {
      font-size: 4rem;
    }

    p {
      font-size: 2rem;
    }

    a {
      margin-top: 4rem;
    }
  }
  @media (max-width: 800px) and (max-height: 578px) {
    justify-content: center;
  }
`;
