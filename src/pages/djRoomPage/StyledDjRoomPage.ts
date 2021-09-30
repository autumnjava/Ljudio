import styled, { keyframes } from "styled-components";

const spin = keyframes `
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`

const leftToRight = keyframes`
 0% {
   transform: translateX(70%);
 }

 33%{
   transform: translateY(70%);
 }


 100%{
   transform: translateX(70%);
 }
`

const leftToRight2 = keyframes`
 0% {
   transform: translateX(30%);
 }

 33%{
   transform: translateY(30%);
 }


 100%{
   transform: translateX(30%);
 }
`

const leftToRight3 = keyframes`
 0% {
   transform: translateX(10%);
 }

 33%{
   transform: translateY(10%);
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
   transform: translateY(200%) translateX(200%);
 }


 70%{
   transform: translateX(350%);
   width: 15%;
   height: 15%;
 }

 100%{
   transform: translateX(0%);
 }
`

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  width: 90%;
  margin: 20px auto;
  height: 75vh;
`

export const StyledHead = styled.div`
  width: 90%;
  height: 100%;
  grid-row: 3;
  grid-column: 3;
  background: black;
  border-radius: 50%;
  background-image: url('https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  border: 5px solid #7A00C0;
  box-shadow: 0 0 20px #EF02EB;
  animation-name: ${spin};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
`

export const StyledAvatar1 = styled.div`
background: black;
  grid-row: 2;
  grid-column: 2;
`

export const StyledInner1 = styled.div`
  width: 70%;
  height: 70%;
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
  grid-row: 4;
  grid-column: 4;
`

export const StyledInner2 = styled.div`
  width: 70%;
  height: 70%;
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
  grid-column: 4;
`

export const StyledInner3 = styled.div`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  animation-name: ${leftToRight3};
  animation-duration: 7s;
  animation-iteration-count: infinite;
  border: 5px solid #0C0293;
  box-shadow: 0 0 20px #0C0293;
`

export const StyledAvatar4 = styled.div`
  grid-row: 4;
  grid-column: 2;
`

export const StyledInner4 = styled.div`
  width: 10%;
  height: 10%;
  border-radius: 50%;
  animation-name: ${leftToRight4};
  animation-duration: 12s;
  animation-iteration-count: infinite;
  border: 5px solid #0C0293;
  box-shadow: 0 0 20px #0C0293;
`

export const StyledAvatar5 = styled.div`
  grid-row: 3;
  grid-column: 4;
`

export const StyledInner5 = styled.div`
  width: 7%;
  height: 7%;
  border-radius: 50%;
  animation-name: ${leftToRight4};
  animation-duration: 12s;
  animation-iteration-count: infinite;
  border: 5px solid #EF02EB;
  box-shadow: 0 0 20px #EF02EB;
`