import styled from "styled-components";

export const Wrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width:50%;
    display: flex;
    right: -9vw;

    svg {
       width: 53vw;
    position: absolute;
    left: -6vw;
    z-index: -1;
    }
`
export const Img = styled.img`
    height: 100%;
    position: absolute;
    &::selection {
        background: none
    }
`