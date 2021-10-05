import React,{ useState, useRef, useContext, useEffect } from "react";
import CreateIcon from '@material-ui/icons/Create';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckIcon from '@material-ui/icons/Check';
import { UserContext } from '../../contexts/usersContext/UserContextProvider';
import { useHistory } from "react-router";
import {
  StyledWrapper,
  StyledName,
  StyledNameDiv,
  StyledTitleDiv,
  StyledNameSpan,
  StyledNameInput,
  StyledEditDiv,
  StyledBtn
} from "./StyledProfilePage";



const ProfilePage: React.FC = () => {
  const { user, getUser, changeUsername, logout } = useContext(UserContext);
  const [userId, setUserId] = useState<string | null>();
  const [editName, setEditName] = useState(false);
  const newName: any = useRef();
  const history = useHistory();
  const editHandler = () => {
      setEditName(!editName);
  }

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUserId(userId);
  }, []);


  useEffect(() => {
    if (userId) {
      getCurrentUser();
    }
  }, [userId]);


  const getCurrentUser = async () => {
    await getUser(userId);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveEditName = async (ref: any, setEditName: any) => {
    setEditName(!editName);
    await changeUsername(userId, ref.current.value);
  }
   const logoutHandler = async () => {
    logout();
    history.push('/');
    window.location.reload();
  }


  return (
    <StyledWrapper>
      <StyledTitleDiv>
        <AccountCircleIcon color="secondary" fontSize="large" /><StyledNameSpan>My Profile</StyledNameSpan>
      </StyledTitleDiv>
      {!editName ? <StyledNameDiv>
        <CreateIcon onClick={editHandler} fontSize="small" /><StyledName>{user?.username}</StyledName>
       
      </StyledNameDiv> : <StyledEditDiv><CheckIcon onClick={() => saveEditName(newName, setEditName)} fontSize="small" /><StyledNameInput ref={newName} placeholder={user?.username} type="text" /></StyledEditDiv>}

              <StyledBtn onClick={logoutHandler}>Logout</StyledBtn>
    </StyledWrapper>

  );
}

export default ProfilePage;