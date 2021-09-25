import styled from 'styled-components';

export const StyledList = styled.ul`
  padding: 0.5rem;
`

export const StyledListItem = styled.li`
  padding: 0.7rem;

  &:nth-child(2n+1) {
    background: #ededed;
  }
`