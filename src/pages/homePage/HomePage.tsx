import React, { useContext, useState, useEffect } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'
import { useHistory } from "react-router";
import SearchField from '../../components/searchField/SearchField';
import logo from "../landingPage/videos/logo.png"
import { PlaylistContext } from "../../contexts/playlistsContext/PlaylistContextProvider";
import { DjRoomContext } from '../../contexts/djRoomContext/djRoomContextProvider';
import HomePlaylistItem from "../../components/homePlaylistItem/HomePlaylistItem";
import {
  StyledLogoImg,
  StyledWrapper,
  StyledImgDiv,
  StyledGridDiv,
  StyledWelcomeMsg,
  StyledSpan,
  StyledCategory,
  StyledContentDiv
} from "./StyledHomePage"
import HomeDjRoomItem from "../../components/homeDjRoomItem/HomeDjRoomItem";

import DjRoomRowItem from "../../components/djRoomRowItem/DjRoomRowItem"

interface List {
  name: string;
  _id: string;
}


const HomePage: React.FC = () => {
  const { user, getUser } = useContext(UserContext);
  const { handleSearch, handleArtistSearch } = useContext(PlaylistContext);
  const { playlists, getUserPlaylists } = useContext(PlaylistContext);
  const [userId, setUserId] = useState<string | null>('');
  const { activeDjRooms, getActiveDjRooms, joinDjRoom, getOwnersDjRooms, ownersDjRooms } = useContext(DjRoomContext);
  const [nrOfRooms, setNrOfRooms] = useState(2);
 
    useEffect(() => {
      const userId = localStorage.getItem('userId');
      setUserId(userId);
  }, []);


  useEffect(() => {
    if (userId) {
      myPlaylists();
      myDjRooms();
      getUser(userId)
    }
  }, [!playlists, userId]);


    const myDjRooms = async () => {
    await getOwnersDjRooms(userId);
    }
  
  const myPlaylists = async () => {
    await getUserPlaylists(userId);
  }

  useEffect(() => {
    getAllDjRooms()
  }, []);

  const getAllDjRooms = async () => {
    await getActiveDjRooms();
  }

   const handleJoinDjRoom = async (djRoomId: string) => {
    await joinDjRoom(userId, djRoomId);
  }
  
  return (
    <StyledWrapper>
      <StyledImgDiv>
        <StyledLogoImg src={logo} />
        {user.username && <StyledWelcomeMsg>Welcome back <StyledSpan>{user.username.toUpperCase()}</StyledSpan></StyledWelcomeMsg>}
      </StyledImgDiv>

        <SearchField handleArtistSearch={handleArtistSearch} handleYoutubeSearch={handleSearch} />
      <StyledContentDiv>
        
      <StyledCategory>Your Playlists:</StyledCategory>
        <StyledGridDiv>
            {playlists && playlists.map((list: List) => {
              return <HomePlaylistItem key={list._id} data={[list]} />
            })}
        </StyledGridDiv>

      <StyledCategory>Your Dj Rooms:</StyledCategory>
      <StyledGridDiv>
                {ownersDjRooms && ownersDjRooms.map((list: List, index: number) => {
          return <HomeDjRoomItem key={list._id + index} data={[list]} />
        })}
      </StyledGridDiv>

       <StyledCategory>Recommended Dj Rooms:</StyledCategory>
      {activeDjRooms && activeDjRooms.map((room: any, index: number) =>
        <div key={index}>
          {index <= nrOfRooms && <DjRoomRowItem key={room._id} data={[room, handleJoinDjRoom]} />}
        </div>
        )}
        </StyledContentDiv>
    </StyledWrapper>
  )
}

export default HomePage;