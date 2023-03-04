import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  background: linear-gradient(45deg, white, gray);
  display: flex;
  align-items: end;
  @media (max-width: 1200px) {
    align-items: center;
  }

  @media (max-width: 1140px) {
    height: auto;
  }
`;
