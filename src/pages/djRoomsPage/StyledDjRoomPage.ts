import styled from "styled-components";

export const StyledWrapper = styled.div`
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
      margin-bottom: 4rem;
    }
     @media (min-width: 769px) {
        &:last-child {
      margin-bottom: 1rem;
    }
     }
`;






