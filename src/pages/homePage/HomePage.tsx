import React, { useContext } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'
import { StyledTitle } from "./StyledHomePage"

const HomePage: React.FC = () => {
  const {logout } = useContext(UserContext)


  const logoutHandler = async () => {
    logout();
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