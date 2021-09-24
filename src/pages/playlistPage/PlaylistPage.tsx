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
  const { playlist, getSongsFromPlaylist, playlists } = useContext(PlaylistContext)

  useEffect(() => {
    playlistSongs();
  }, [!playlist]);
   

  const currentList = playlists?.find((p: any) => p._id === id)

  
    const playlistSongs = async () => {
      const playlistId = "614b47f372dc1bfaa3260bfe";
      await getSongsFromPlaylist(playlistId);
      
      console.log('playlist songs', playlist);
      console.log("playlistssss", playlists) 
    }
    
  return (
    <>

      {/* Här kommer data för spellistans namn att visas */}
       <div>
        <StyledPLTitle>{currentList.name}</StyledPLTitle>
      </div>
      {playlist && playlist.map((song: SongProps) => {
        return <PlaylistRowItem key={song.videoId} song={song} />
      })}
    </>
  )
}

export default PlaylistPage;