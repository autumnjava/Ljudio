import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 10%;
`;
export const StyledPageTitle = styled.p`
font-size: 1rem;
letter-spacing: 3px;
text-align: center;

 @media (min-width: 769px) {
  font-size: 1.5rem;
 }
`;

export const StyledItem = styled.div`
 &:last-child {
      margin-bottom: 8.5rem;
    }
     @media (min-width: 769px) {
        &:last-child {
      margin-bottom: 5.5rem;
    }
     }
`;






