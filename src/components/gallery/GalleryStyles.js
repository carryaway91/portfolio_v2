import styled from "styled-components";

export const ProjectImg = styled.img`
    font-size: 0;
    width: 33vw
`

export const Overlay = styled.div`
cursor: pointer;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgb(0,0,0);
    z-index: 2;
    opacity: 0;
    transition: all .1s ease-in-out;
    a {
        color: white;
        font-weight: bold;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column
    };

    p {
        margin: 0
    }
    
    &:hover {
        opacity: 0.8



`