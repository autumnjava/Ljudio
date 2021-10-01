import React, { useContext, useState } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'
import { StyledTitle } from "./StyledHomePage"
import { useHistory } from "react-router";
import SearchField from '../../components/searchField/SearchField';
import { PlaylistContext } from "../../contexts/playlistsContext/PlaylistContextProvider";
import Songs from "../../components/subscriptionTest/Songs";

const HomePage: React.FC = () => {
  const { logout } = useContext(UserContext);
  const { handleSearch } = useContext(PlaylistContext);
  const history = useHistory();

  const logoutHandler = async () => {
    logout();
    history.push('/');
    window.location.reload();
  }
  
  return (
    <>
      <StyledTitle>HOME</StyledTitle>
        <SearchField handleYoutubeSearch={handleSearch} />
      <button onClick={logoutHandler}>Logout</button>
      <Songs />      
    </>
  )
}

export default HomePage;