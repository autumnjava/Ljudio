import styled from "styled-components"


export const StyledTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
`

export const StyledVideo = styled.video`
   position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
  @media (min-width: 769px) {
     width: 100%;
        height: auto;
   }
`;