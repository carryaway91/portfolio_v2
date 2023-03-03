import styled from "styled-components";

export const Wrap = styled.div`
padding-top: 84px;
    height: 100vh;
    background:  linear-gradient(45deg, black, transparent);
    flex-wrap: wrap;
    justify-items: flex-end;
`

export const Overlay = styled.div`
    z-index: 1000000000;
    position: absolute;
    background: rgba(0, 0, 0, .5);
    bottom: 0;
    top: 0;
    left: 0;
    right: 0
`