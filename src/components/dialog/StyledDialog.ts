import styled from 'styled-components';

export const StyledList = styled.ul`
  padding: 0.5rem;
`

export const StyledListItem = styled.li`
  padding: 0.7rem;
  cursor: pointer;
   @media (min-width: 769px) {
    &:hover{
      background: #ededed;
    }
   }  
`