import styled from "styled-components";


export const StyledNavWrapper = styled.div`  
  top: auto;
  bottom: 0;
  position: fixed;
  border-bottom: 1px solid grey;
  z-index: 100;

  @media (min-width: 769px) {
    width: 100%;
    top: 0;
    border: none;
    height: fit-content;
  }
`;

export const StyledLabel = styled.span`
  color: #f50057;
  z-index: -1;
  font-size: 11px;
`;