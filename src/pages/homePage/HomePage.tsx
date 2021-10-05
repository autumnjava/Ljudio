import React, { useContext, useState } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'
import { StyledTitle } from "./StyledHomePage"
import { useHistory } from "react-router";
import SearchField from '../../components/searchField/SearchField';
import { PlaylistContext } from "../../contexts/playlistsContext/PlaylistContextProvider";

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
        <SearchField handleArtistSearch={handleSearch} handleYoutubeSearch={handleSearch} />
  
    </>
  )
}

export default HomePage;