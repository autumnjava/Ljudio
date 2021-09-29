import React, { useContext } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'
import { StyledTitle } from "./StyledHomePage"
import { useHistory } from "react-router";


const HomePage: React.FC = () => {
  const {logout } = useContext(UserContext);
  const history = useHistory();



  const logoutHandler = async () => {
    logout();
    history.push('/');
    window.location.reload();
  
}
  return (
    <>
      <StyledTitle>HOME</StyledTitle>
      <button onClick={logoutHandler}>Logout</button>
      
    </>
  )
}

export default HomePage;