import styled, { keyframes } from "styled-components";

const moveHead = keyframes `
 0% {
   transform: translateX(10%);
 }

 33%{
   transform: translateX(60%);
     border: 7px solid #EF02EB;
    box-shadow: 0 0 20px #EF02EB;
 }

 100%{
   transform: translateX(10%);
 }
`

const leftToRight = keyframes`
 0% {
   transform: translateX(70%);
 }

 33%{
   transform: translateY(70%);
    border: 6px solid #9001C7;
    box-shadow: 0 0 20px #9001C7;
 }

  70%{
   transform: translateX(10%);
     border: 5px solid #9001C7;
    box-shadow: 0 0 20px #9001C7;
 }


 100%{
   transform: translateX(70%);
 }
`

const leftToRight2 = keyframes`
 0% {
   transform: translateY(30%);
 }

 33%{
   transform: translateY(5%);
     border: 7px solid #EF02EB;
    box-shadow: 0 0 20px #EF02EB;
 }

 70%{
   transform: translateX(20%);
     border: 8px solid #EF02EB;
    box-shadow: 0 0 20px #EF02EB;
 }

 100%{
   transform: translateY(30%);
 }
`

const leftToRight3 = keyframes`
 0% {
   transform: translateX(10%);
 }

 33%{
   transform: translateY(10%);
     border: 5px solid #9001C7;
    box-shadow: 0 0 20px #9001C7;
 }


 100%{
   transform: translateX(10%);
 }
`

const leftToRight4 = keyframes`
 0% {
   transform: translateX(0%);
 }

 33%{
   transform: translateX(70%);
    border: 7px solid #EF02EB;
    box-shadow: 0 0 20px #EF02EB;
 }

 100%{
   transform: translateX(0%);
 }
`

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 90%;
  margin: 20px auto;
  height: 75vh;
  @media (min-width: 769px) {
    width: 45%;
    height: 80vh;
  }
`

export const StyledHead = styled.div`
  width: 125%;
  height: 100%;
  grid-row: 4/6;
  grid-column: 2/4;
  background: black;
  border-radius: 50%;
  background-size: cover;
  animation-name: ${moveHead};
  animation-duration: 12s;
  animation-iteration-count: infinite;
  border: 5px solid #7A00C0;
  box-shadow: 0 0 20px #EF02EB;
`

export const StyledAvatar1 = styled.div`
  background: black;
  grid-row: 2;
  grid-column: 1;
`

export const StyledInner1 = styled.div`
  width: 120%;
  height: 100%;
  border-radius: 50%;
  animation-name: ${leftToRight};
  animation-duration: 12s;
  animation-iteration-count: infinite;
  border: 5px solid #EF02EB;
  box-shadow: 0 0 20px #EF02EB;
`

export const StyledName1 = styled.p`
position: relative;
top: 22%;
left:22%;
letter-spacing: 3px;
`


export const StyledAvatar2 = styled.div`
background: black;
  grid-row: 6;
  grid-column: 1/2;
`

export const StyledInner2 = styled.div`
  width: 140%;
  height: 120%;
  border-radius: 50%;
  animation-name: ${leftToRight2};
  animation-duration: 7s;
  animation-iteration-count: infinite;
  border: 5px solid #9001C7;
  box-shadow: 0 0 20px #9001C7;
`


export const StyledAvatar3 = styled.div`
background: black;
  grid-row: 2;
  grid-column: 5;
`

export const StyledInner3 = styled.div`
  width: 120%;
  height: 100%;
  border-radius: 50%;
  animation-name: ${leftToRight3};
  animation-duration: 7s;
  animation-iteration-count: infinite;
  border: 5px solid #EF02EB;
  box-shadow: 0 0 20px #EF02EB;
`

export const StyledAvatar4 = styled.div`
  grid-row: 7;
  grid-column: 4;
`

export const StyledInner4 = styled.div`
  width: 120%;
  height: 100%;
  border-radius: 50%;
  animation-name: ${leftToRight4};
  animation-duration: 12s;
  animation-iteration-count: infinite;
  border: 5px solid #9001C7;
  box-shadow: 0 0 20px #9001C7;
`