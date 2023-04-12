import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  display: flex;
  align-items: flex-end;
  bottom: -6vh;
`;
export const Img = styled.img`
  height: 100vh;
  position: relative;
  z-index: -1;
  &::selection {
    background: none;
  }
  @media (max-width: 1366px) and (max-height: 578px) {
    max-height: 93vh;
  }

  @media (max-width: 1140px) and (min-height: 578px) {
    display: none;
  }
  @media (max-width: 800px) and (max-height: 578px) {
    display: none;
  }
`;
