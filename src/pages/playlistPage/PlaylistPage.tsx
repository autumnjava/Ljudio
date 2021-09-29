import { StyledPLTitle,StyledHeadWrapper,StyledButton } from "./StyledPlaylistPage";
import PlaylistRowItem from "../../components/playlistRowItem/PlaylistRowItem";
import { useContext, useEffect, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";

interface SongProps {
  _id: string,
  name: string,
  videoId: string,
  duration: number,
  image: string
}

const PlaylistPage = () => {

  const { id }: any = useParams();
  const { playlist, getSongsFromPlaylist } = useContext(PlaylistContext);
  const [userId, setUserId] = useState<string | null>();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUserId(userId);
  }, [])

  useEffect(() => {
    if (userId) {
      playlistSongs();
    }
  }, [!userId, !playlist]);
  
    const playlistSongs = async () => {
      await getSongsFromPlaylist(id);
    }
  

  return (
    <>
      {console.log('here',playlist.songs)}
      <div>
        {playlist ? <StyledHeadWrapper>
          <StyledPLTitle>{playlist.name}</StyledPLTitle>
          <StyledButton>PLAY ALL</StyledButton>
        </StyledHeadWrapper> : <p style={{marginTop: "55px"}}>NAME NOT FOUND...</p>}
        {playlist.songs && playlist.songs.map((song: SongProps) => {
          return <PlaylistRowItem key={song._id} song={song} playlistId={playlist._id} />
        })}
      </div>
    </>
  )
}

export default PlaylistPage;