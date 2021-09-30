import React, { useContext, useState } from "react";
import {UserContext} from '../../contexts/usersContext/UserContextProvider'
import { StyledTitle } from "./StyledHomePage"
import { useHistory } from "react-router";
import SearchField from '../../components/searchField/SearchField';
import { PlaylistContext } from "../../contexts/playlistsContext/PlaylistContextProvider";

import { useQuery, useMutation, useSubscription, gql } from "@apollo/client";

const HomePage: React.FC = () => {

function CurrentSong() {
  const GET_CURRENT_SONG = gql`
  query { getCurrentSong { title }}
  `;

  const { loading, error, data } = useQuery(GET_CURRENT_SONG);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
  <p>{data.getCurrentSong.title}</p>
  )
}

function ChangeSong() {
  const [newSongName, setNewSongName] = useState('');
  const CHANGE_SONG = gql`
  mutation ($newSongName: String!)
  {
    changeCurrentSong(newSongName: $newSongName)
    { title }
  }
  `;

  const [changeCurrentSong, { data, loading, error }] = useMutation(CHANGE_SONG);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            changeCurrentSong({ variables: { newSongName} });
            setNewSongName('');
          }}
        >
          <input
            value={newSongName}
            onChange={(e) => setNewSongName(e.target.value)}
          />
          <button type="submit">Change current song</button>
        </form>
      </div>
    );

    function SongSubscr() {
      const SONG_SUBSCRIPTION = gql`
      subscription{songUpdated{title}}
      `;
  
    const { data, loading } = useSubscription(
      SONG_SUBSCRIPTION,
      {}
    );
  
    return (
    <h4>New comment: {!loading && data.songUpdated.title}</h4>
    )
  }
   
}


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
      <CurrentSong />
      <ChangeSong />
      {/* <SongSubscr /> */}
      
    </>
  )
}

export default HomePage;