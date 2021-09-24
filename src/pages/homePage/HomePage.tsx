import React, { useContext } from "react";
import { useHistory } from "react-router";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'
import { StyledTitle } from "./StyledHomePage"

const HomePage: React.FC = () => {
  const history = useHistory();
  const {logout } = useContext(UserContext)


  const logoutHandler = () => {
    logout();
    history.push("/");
}
  return (
    <>
      <StyledTitle>HOME</StyledTitle>
      <button onClick={logoutHandler}>Logout</button>
      
    </>
  )
}

export default HomePage;