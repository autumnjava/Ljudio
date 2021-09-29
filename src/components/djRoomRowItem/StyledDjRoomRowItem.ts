import styled from "styled-components";

export const StyledItemWrapper = styled.div`
  
`;


export const StyledItemRow = styled.div`
  display: grid;
  grid-template-columns: 10% 70% 10% 10%;
    @media (min-width: 769px) {
      width: 80%;
      display: grid;
  
  margin: 0 auto;
    grid-template-columns: 5% 1fr 5% 5%;
  }
`;

export const StyledInfoDiv = styled.div`
  margin: 0;
  padding: 0;
`; 

export const StyledAudience = styled.span`
position: absolute;
 color: #f50057;
 padding-top: 5px;
`; 

export const StyledAudienceIcon = styled.div`
padding-top: 15px;
align-self: start;
margin: 0;
`;
export const StyledRoomTitle = styled.p`
  color: purple;
`;
export const StyledRoomDJ = styled.p`

`;
export const StyledDJSpan = styled.span`
font-weight: 500;
color: purple;
`;


export const StyledDjIcon = styled.div`
  color: purple;
  padding: 5px;
  align-self: center;
`;


export const StyledEnterRoom = styled.p`
  cursor: pointer;
  &:hover{
    color: green;
  }
`;