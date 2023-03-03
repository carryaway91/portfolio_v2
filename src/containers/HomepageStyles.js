import styled from "styled-components";

export const Wrap = styled.div`
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export const Hero = styled.div`
    width: 1366px;
    position: relative;
    margin: 0 auto
`

export const Rect = styled.div`
    position: absolute;
    width: 135rem;
    height: 110vh;
    left: -10rem;
    background: #d5d5d5;
    transform: rotate(131deg);
    z-index: -2
`
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
    cursor: pointer
`

