import { StyledPLTitle } from "./StyledPlaylistPage";
import PlaylistRowItem from "../../components/playlistRowItem/PlaylistRowItem";
import { useContext, useEffect, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
import { useParams } from "react-router-dom";

interface SongProps {
  name: string,
  videoId: string,
  duration: number,
  image: string
}

const PlaylistPage = () => {

  const { id }: any = useParams();
  const { playlist, playlists, getSongsFromPlaylist, getUserPlaylists } = useContext(PlaylistContext)

  const currentPL = playlists?.find((p: any) => p._id === id);


  useEffect(() => {
    playlistSongs();
  }, [!playlist]);
  
  useEffect(() => {
    myPlaylists();
  }, [!playlists]);

  const myPlaylists = async () => {
    const userId = "614c45add183eb4b3d148816";
    await getUserPlaylists(userId);
   
  }
  
    const playlistSongs = async () => {
      const playlistId = "614b47f372dc1bfaa3260bfe";
      await getSongsFromPlaylist(playlistId);
    }
    
  return (
    <>
      <div>
        {currentPL ? <div>
          <StyledPLTitle>{currentPL.name}</StyledPLTitle>
        </div> : <p style={{marginTop: "55px"}}>NAME NOT FOUND...</p>}
        {playlist && playlist.map((song: SongProps) => {
          return <PlaylistRowItem key={song.videoId} song={song} playlistData={currentPL?.name} />
        })}
      </div>
    </>
  )
}

export default PlaylistPage;