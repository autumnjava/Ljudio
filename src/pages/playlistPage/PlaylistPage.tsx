import { StyledPLTitle,StyledHeadWrapper,StyledButton, StyledWrapper } from "./StyledPlaylistPage";
import PlaylistRowItem from "../../components/playlistRowItem/PlaylistRowItem";
import { useContext, useEffect, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface SongProps {
  _id: string,
  title: string,
  videoId: string,
  duration: number,
  image: string
}

const PlaylistPage = () => {
  
  const { id }: any = useParams();
  const { playlist, getSongsFromPlaylist, setCurrentSong, updatePlaylist } = useContext(PlaylistContext);
  const [userId, setUserId] = useState<string | null>();
  const [songs, setSongs] = useState<SongProps[]>([]);


  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUserId(userId);
  }, [])

  useEffect(() => {
    if (userId) {
      playlistSongs();
    }
  }, [!userId]);

  useEffect(() => {
    if (!songs || !songs.length) {
      setSongs(playlist.songs);
    }
  }, [playlist]);

  const playlistSongs = async () => {
      setSongs([]);
      await getSongsFromPlaylist(id);
    }
  
  const handlePlayAll = () => {
    setCurrentSong(playlist.songs)
  }
 
      const HandleOnDragEnd = async (result: any) => {
    if (!result.destination) return;
    const items = Array.from(songs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setSongs(items);
    updatePlaylist(id, items);
}
  
  

  return (
    <>
      <DragDropContext onDragEnd={HandleOnDragEnd}>
          {playlist ? <StyledHeadWrapper>
          <StyledPLTitle>{playlist.name}</StyledPLTitle>
          <StyledButton onClick={handlePlayAll}>PLAY ALL</StyledButton>
          </StyledHeadWrapper> : <p style={{ marginTop: "55px" }}>NAME NOT FOUND...</p>}

      <div style={{ marginBottom: '3rem' }}>
       
          <Droppable droppableId="songs">
            {(provided: any, snapshot: any) => (
              <ul {...provided.droppableProps} ref={provided.innerRef} style={{padding: '4px',userSelect: 'none'}}>
          {songs && songs.map((song: SongProps, index: number) => {
            return (
              <Draggable key={song._id} draggableId={song._id + ''} index={index}>
                {(provided: any, snapshot: any) => (
                  <div index={index} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={{
                      userSelect: 'none',
                      backgroundColor: snapshot.isDragging ? '#141414' : 'black',
                      color: 'White',
                      ...provided.draggableProps.style
                    }}>
                    <PlaylistRowItem key={song._id} index={index} playlistSongs={playlistSongs} song={song} playlistId={playlist._id} 
                    />
                    </div >
                )}
                </Draggable>
            );
          })}
                {provided.placeholder}
            </ul>    
            )}
            </Droppable>
          
        
      </div>
      </DragDropContext>

</>    
  )
}

export default PlaylistPage;