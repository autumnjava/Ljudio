import styled from "styled-components";

interface NavProps {
  show: boolean
}

export const StyledNavWrapper = styled.div<NavProps>`
  display: ${props => !props.show ? 'block' : 'none'} ;
  top: auto;
  bottom: 0;
  position: fixed;
  border-bottom: 1px solid grey;
  z-index: 100;
  padding: 0;

  @media (min-width: 769px) {
    width: 100%;
    top: 0;
    border: none;
    height: fit-content;
  }
`;

export const StyledLabel = styled.span`
  color: white;
  z-index: -1;
  font-size: 10px;
  text-transform: uppercase;
`;