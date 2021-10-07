import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { useContext, useEffect, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import {StyledTitleWrapper ,StyledTitle, StyledSongWrapper, StyledSongImg, StyledSongs} from './StyledDjRoomOwnersModal'

interface Props {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  playListId: string
}

interface SongProps {
  _id: string,
  title: string,
  videoId: string,
  duration: number,
  image: string
}

const style = {
  position: 'absolute' as const,
  outline: 'none',
  padding: '1rem',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  maxHeight: '80vh',
  overflowY: 'scroll' as const,
  bgcolor: 'black',
  color: 'white',
  boxShadow: 24,
  p: 1,
};

const DjRoomOwnersPlaylistModal = ({ open, setOpen, playListId }: Props) => {

  const { id }: any = useParams();
  const { playlist, getSongsFromPlaylist, setCurrentSong, updatePlaylist } = useContext(PlaylistContext);
  const [userId, setUserId] = useState<string | null>();
  const [songs, setSongs] = useState<SongProps[]>([]);
  useEffect(() => {

    setUserId(localStorage.getItem('userId'));
  }, [])

  useEffect(() => {
    if (userId && playListId) {
      playlistSongs(playListId);
    }
  }, [!userId, !playlist, playListId]);

    useEffect(() => {
    if (!songs || !songs.length) {
      setSongs(playlist.songs);
    }
  }, [playlist]);


  const playlistSongs = async (id: string) => {
    await getSongsFromPlaylist(id);
  }

  const printDuration = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
  }

    const HandleOnDragEnd = async (result: any) => {
    if (!result.destination) return;
    const items = Array.from(songs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setSongs(items);
    updatePlaylist(id, items);
}

  // {song && <StyledSongWrapper key={song._id} onClick={() => setCurrentSong([song])} >
  //                     <StyledSongImg src={song.image} alt="" />
  //                     <StyledSongs>{song && song.title}</StyledSongs>
  //                     <p>{printDuration(song.duration)}</p>
  //                   </StyledSongWrapper>}
 

  
  return (
    <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
          <DragDropContext onDragEnd={HandleOnDragEnd}>

      <Box sx={style}>

        
          <StyledTitleWrapper>
          <StyledTitle>DJ LIST</StyledTitle>
          <PlaylistPlayIcon
            onClick={() => setCurrentSong(playlist.songs)}
            style={{
              justifySelf: 'end',
              alignSelf: 'center',
              fontSize: '2rem',
              marginRight: '1rem',
              cursor: 'pointer'
            }} />
        </StyledTitleWrapper>
           
   

  

      <div style={{ marginBottom: '3rem'}}>
       
          <Droppable droppableId="songs">
            {(provided: any, snapshot: any) => (
              <ul {...provided.droppableProps} ref={provided.innerRef} style={{padding: '4px',userSelect: 'none'}}>
          {songs && songs.map((song: SongProps, index: number) => {
            return (
              <Draggable key={song._id} draggableId={song._id + ''} index={index}>
                {(provided: any, snapshot: any) => {
                  if (snapshot.isDragging) {
                  provided.draggableProps.style.left = provided.draggableProps.style.offsetLeft;
                  provided.draggableProps.style.top = provided.draggableProps.style.offsetTop;
                  }
                  
                  return (<div index={index} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={{
                    userSelect: 'none',
                    backgroundColor: snapshot.isDragging ? '#141414' : 'black',
                    color: 'White',
                    ...provided.draggableProps.style
                  }}>

                    {song && <StyledSongWrapper key={song._id} onClick={() => setCurrentSong([song])} >
                      <StyledSongImg src={song.image} alt="" />
                      <StyledSongs>{song && song.title}</StyledSongs>
                      <p>{printDuration(song.duration)}</p>
                    </StyledSongWrapper>}
                    
                  </div >
                  )
                }}
                </Draggable>
            );
          })}
                {provided.placeholder}
            </ul>    
            )}
            </Droppable>
      </div>
      </Box>
       </DragDropContext>
       
    </Modal>
           
  )
}

export default DjRoomOwnersPlaylistModal; 