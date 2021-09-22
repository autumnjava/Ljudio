import React,{ useState, useRef } from "react";
import CreateIcon from '@material-ui/icons/Create';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckIcon from '@material-ui/icons/Check';
 
import {
  StyledWrapper,
  StyledName,
  StyledNameDiv,
  StyledTitleDiv,
  StyledNameSpan,
  StyledNameInput,
  StyledEditDiv
} from "./StyledProfilePage";


const ProfilePage: React.FC = () => {

  const [name, setName] = useState('Username');
  const [editName, setEditName] = useState(false);
  const newName: any = useRef();
  const editHandler = () => {
      setEditName(!editName);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveEditName = (ref: any, setEditName: any) => {
    setEditName(!name)
    setName(ref.current.value)
    console.log(ref.current.calue, "hmm")
  }


  return (
    <StyledWrapper>
      <StyledTitleDiv>
        <AccountCircleIcon color="secondary" fontSize="large" /><StyledNameSpan>My Profile</StyledNameSpan>
      </StyledTitleDiv>
      {!editName ? <StyledNameDiv>
        <CreateIcon onClick={editHandler} fontSize="small" /><StyledName>{name}</StyledName>
       
      </StyledNameDiv> : <StyledEditDiv><CheckIcon onClick={() => saveEditName(newName, setEditName)} fontSize="small" /><StyledNameInput ref={newName} placeholder={name} type="text" /></StyledEditDiv>}


    </StyledWrapper>

  );
}

export default ProfilePage;