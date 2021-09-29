import { StyledPLTitle } from "./StyledPlaylistPage";
import PlaylistRowItem from "../../components/playlistRowItem/PlaylistRowItem";
import { useContext, useEffect, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
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
  }, [userId, playlist]);
  
    const playlistSongs = async () => {
      await getSongsFromPlaylist(id);
    }
  

  return (
    <>
      <div>
        {playlist ? <div>
          <StyledPLTitle>{playlist.name}</StyledPLTitle>
        </div> : <p style={{marginTop: "55px"}}>NAME NOT FOUND...</p>}
        {playlist.songs && playlist.songs.map((song: SongProps) => {
          return <PlaylistRowItem key={song._id} song={song} playlistId={playlist._id} />
        })}
      </div>
    </>
  )
}

export default PlaylistPage;