import styled from "styled-components";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateIcon from '@material-ui/icons/Create';

export const StyledWrapper = styled.div`
  margin-top: 10vh;
  @media (min-width: 769px) {
      width: 70%;
      margin: 0 auto;
      margin-top: 6rem;
   }
`;

export const StyledExitIcon = styled(ExitToAppIcon)`
cursor: pointer;
    &:hover{
    color: #f50057;
  }
`
export const StyleEditIcon = styled(CreateIcon)`
cursor: pointer;
    &:hover{
    color: #f50057;
  }
`

export const StyledName = styled.span`
  margin-left: 1rem;
`;

export const StyledNameDiv = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
`;

export const StyledTitleDiv = styled.div`
    display: grid;
    grid-template-columns: 3rem 1fr 3rem;
    margin: 2rem;
`;

export const StyledNameSpan = styled.div`
  font-size: 1.6rem;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  align-self: center;
`;


export const StyledNameInput = styled.input`
  margin-left: 1rem;
  text-decoration: none;
  background: black;
  color: white;
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
`;

export const StyledEditDiv = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
`;

export const StyledBtn = styled.button`
  background: black;
  border: 1px solid #f50057;
  color: #f50057;
  padding: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  &:hover{
    background: #f50057;
    color: black;
  }
`;