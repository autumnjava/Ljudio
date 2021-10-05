import React, { useContext, useState, useEffect } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'
import { useHistory } from "react-router";
import SearchField from '../../components/searchField/SearchField';
import logo from "../landingPage/videos/logo.png"
import MyDjRoomItem from "../../components/myDjRoomItem/MyDjRoomItem";
import { PlaylistContext } from "../../contexts/playlistsContext/PlaylistContextProvider";
import { DjRoomContext } from '../../contexts/djRoomContext/djRoomContextProvider';
import HomePlaylistItem from "../../components/homePlaylistItem/HomePlaylistItem";
import {
  StyledLogoImg,
  StyledWrapper,
  StyledImgDiv,
  StyledGridDiv
} from "./StyledHomePage"
import HomeDjRoomItem from "../../components/homeDjRoomItem/HomeDjRoomItem";

interface List {
  name: string;
  _id: string;
}


const HomePage: React.FC = () => {
  const { logout } = useContext(UserContext);
  const { handleSearch } = useContext(PlaylistContext);
  const history = useHistory();
  const { playlists, getUserPlaylists } = useContext(PlaylistContext);
  const { getOwnersDjRooms, ownersDjRooms,  } = useContext(DjRoomContext);
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
      myDjRooms();
    }
  }, [!playlists, userId]);


    const myDjRooms = async () => {
    await getOwnersDjRooms(userId);
    }
  
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
      <StyledGridDiv>
   
      {playlists && playlists.map((list: List) => {
        return <HomePlaylistItem key={list._id} data={[list]}  />
      })}
        </StyledGridDiv>

      <h2>Your Dj Rooms:</h2>
      <StyledGridDiv>
                {ownersDjRooms && ownersDjRooms.map((list: List, index: number) => {
          return <HomeDjRoomItem key={list._id + index} data={[list]} />
        })}
      </StyledGridDiv>
    </StyledWrapper>
  )
}

export default HomePage;