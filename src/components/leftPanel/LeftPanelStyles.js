import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7vh;

  text: #1b1b23;
  h2 {
    margin: 0;
    font-size: 11vh;

    @media (max-width: 1370px) {
      font-size: 4rem;
    }
  }

  p {
    margin: 0;
    font-size: 2rem;
    @media (max-width: 1370px) {
      font-size: 1.5rem;
    }
  }
`;

export const ContactBtn = styled.a`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: 2px solid #1b1b23;
  border-radius: 7px;
  background: transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover {
    background: #1b1b23;
    color: white;
  }
`;
