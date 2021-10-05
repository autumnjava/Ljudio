import React, { useContext, useState, useEffect } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'
import { useHistory } from "react-router";
import SearchField from '../../components/searchField/SearchField';
import logo from "../landingPage/videos/logo.png"
import { PlaylistContext } from "../../contexts/playlistsContext/PlaylistContextProvider";
import {
  StyledLogoImg,
  StyledWrapper,
  StyledImgDiv
} from "./StyledHomePage"
import PlaylistItem from "../../components/playlistItem/PlaylistItem";


interface List {
  name: string;
  _id: string;
}



const HomePage: React.FC = () => {
  const { logout } = useContext(UserContext);
  const { handleSearch } = useContext(PlaylistContext);
  const history = useHistory();
  const { playlists, getUserPlaylists, deletePlaylist, createPlaylist } = useContext(PlaylistContext);
  const [userId, setUserId] = useState<string | null>('');

  const logoutHandler = async () => {
    logout();
    history.push('/');
    window.location.reload();
  }


    useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUserId(userId);
  }, []);

  useEffect(() => {
    if (userId) {
      myPlaylists();

    }
  }, [!playlists, userId]);


  const myPlaylists = async () => {
    await getUserPlaylists(userId);
  }
  
  return (
    <StyledWrapper>
      <StyledImgDiv style={{margin: '0 auto'}}>
      <StyledLogoImg src={logo}/>
      </StyledImgDiv>

        <SearchField handleArtistSearch={handleSearch} handleYoutubeSearch={handleSearch} />
  
      <h2>Your Playlists:</h2>
      {playlists && playlists.map((list: List) => {
        return <PlaylistItem key={list._id} data={[list]}  />
        })}
    </StyledWrapper>
  )
}

export default HomePage;