import styled from "styled-components"


export const StyledTitle = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.2rem;
`

export const StyledVideo = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  @media (min-width: 769px) {

   }
`;

export const StyledBlurDiv = styled.div`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 50%;
`;


export const StyledWrapper = styled.div`
  @media (min-width: 769px) {
    min-height: 30vh;
   }
`;

export const StyledLogo = styled.img`
  width: 10rem;
  margin: 0 auto;
  position: relative;
  margin-top: 8rem;
  padding-bottom: 2rem;

  
`;

export const StyledContent = styled.div`
  display: grid;
  
`;