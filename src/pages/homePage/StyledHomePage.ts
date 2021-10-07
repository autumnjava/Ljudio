import styled from "styled-components";

export const StyledLogoImg = styled.img`
  width: 8rem;
  align-items: center;
  display: flex;
  margin: 0 auto;
  position: relative;
  margin-top: 2rem;
  padding-bottom: 0.2rem;
    @media (min-width: 769px) {
      margin-top: 6rem;
   }
`;

export const StyledDjRoomsWrapper = styled.div`
  width: 100%;
`

export const StyledWrapper = styled.div`
  margin-bottom: 33%;
 @media (min-width: 769px) {
    margin-bottom: 10%;
  }
`;

export const StyledImgDiv = styled.div`
  margin: 0 auto;
`;

export const StyledGridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.3rem;
  justify-items: center;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const StyledWelcomeMsg = styled.p`
  text-align: center;
  letter-spacing: 3px;
  font-size: 1.2rem;
  text-transform: uppercase;
`;
export const StyledSpan = styled.span`
  color: #f50057;
  font-weight: bolder;
`;

export const StyledCategory = styled.p`
  font-size: 1.2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const StyledContentDiv = styled.div`
  width: 95%;
  margin: 0 auto;
    @media (min-width: 769px) {
    width: 80%;
  }
`;