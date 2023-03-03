import styled from "styled-components";

export const Wrap = styled.div`
    width: 80vw;
    height: 80vh;
    left: 9%;
    top: calc(${props => props.b}px + 1rem);
    position: absolute;
    z-index: 10000000000
    `