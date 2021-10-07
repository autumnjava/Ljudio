import styled, { keyframes } from "styled-components";

const moveHead = keyframes `
 0% {
   color: #EF02EB;
 }

 33%{
 color: #7A00C0;
 }

 100%{
   color: #9001C7;
 }
`

export const StyledWrapper = styled.div`

`

export const StyledSettingsWrapper = styled.div`
padding: 1rem;
`

export const StyledHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1rem 1fr 2rem 2rem 2rem;
`

export const StyledSongTitle = styled.p`
  align-self: center;
  margin: 0 1rem 0 1rem;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
    animation-name: ${moveHead};
  animation-duration: 12s;
  animation-iteration-count: infinite;
    @media (min-width: 769px) {
      margin-left: 5rem;
  }
`