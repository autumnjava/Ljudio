import styled from "styled-components";

export const StyledItemWrapper = styled.div`
 
`;


export const StyledItemRow = styled.div`
  display: grid;
  grid-template-columns: 15% 65% 13% 7%;
  cursor: pointer;
    @media (min-width: 769px) {
        
      margin: 0 auto;
      grid-template-columns: 5% 1fr 5% 5%;
      width: 100%;
      display: grid;
    &:hover{
    background: #141414;
  }
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

export const StyledDJSpan = styled.span`
font-weight: 500;
 color: #f50057;
`;


export const StyledDjIcon = styled.div`
  color: #f50057;
  padding: 5px;
  align-self: center;
`;


export const StyledEnterRoom = styled.p`

  cursor: pointer;
  &:hover{
    color: green;
  }
`;