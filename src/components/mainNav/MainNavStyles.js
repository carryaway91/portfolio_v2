import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 84px;
  z-index: 200000;
  transition: all 0.2s ease-in-out;
  background: ${(props) => (props.bg ? "white" : "transparent")};
  opacity: ${(props) => (props.nav ? 1 : 0)};
`;
export const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  align-self: center;
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const RightPanel = styled.div`
  display: flex;
  align-self: center;

  @media (max-width: 1140px) {
    display: none;
  }
`;
export const LinkItem = styled.div`
  display: inline-block;
  padding: 0.5rem 2rem;
`;

export const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => (props.selected ? "#85837f" : "black")};
  position: relative;
  trnasition: all 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #85837f;
  }
  ${(props) =>
    props.selected &&
    `
        &::before {
            content: "";
            width: 40%;
            height: 4px;
            border-radius: 1rem;
            background: #85837f;
            position: absolute;
            left: 0;
            bottom: -7px;
        }
    `}
`;
