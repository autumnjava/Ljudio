import { Popper } from "@material-ui/core";
import { Fade } from "@mui/material";
import Box from '@mui/material/Box';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import { useState } from "react";
import PlaylistItem from "../../components/playlistItem/PlaylistItem";
import {PlaylistContext} from '../../contexts/playlistsContext/PlaylistContextProvider'
import { useContext, useEffect, useRef } from 'react';
import {
  StyledTitle,
  StyledAddPlaylistDiv,
  StyledGridDiv,
  StyledAddItem,
  StyledWrapper,
  StyledAddIcon,
  StyledListTitle,
  StyledInput,
  StyledAddBtn,
  StyledUndo
} from "./StyledMyPlaylistPage";


interface List {
  name: string;
  _id: string;
}

const MyPlaylistsPage = () => {
  const { playlists, getUserPlaylists, deletePlaylist, createPlaylist } = useContext(PlaylistContext)
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [name, setName] = useState('');
  const [userId, setUserId] = useState<string | null>('');
''
  const handleCreate = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
    setName('');
  };

  const handleAddPlaylist = () => {
    
    console.log("Add playlist function.")
     setOpen(false);
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

  const removePlaylist = async (playlistId: string) => {
    await deletePlaylist(playlistId, userId);
  }

  const addPlaylist = async () => {
    if (!name) {
      return;
    }
    setName('');
    setOpen(false);
    await createPlaylist(name, userId)
  }

  
  return (
    <StyledWrapper>
      <StyledTitle>MyPlaylist</StyledTitle>

      <StyledGridDiv>
        
        
        <StyledAddPlaylistDiv typeof="button" onClick={handleCreate}>
          <StyledAddItem>
            <StyledAddIcon>+</StyledAddIcon>
          </StyledAddItem>
          <StyledListTitle>Skapa playlist</StyledListTitle>
        </StyledAddPlaylistDiv>
        
        <Popper open={open} anchorEl={anchorEl} >
          <Box sx={{ p: 1, bgcolor: '#cfcfcf', borderRadius: '5px', display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr 1fr 1fr' }}>
            <StyledUndo onClick={handleCreate}><HighlightOffRoundedIcon/></StyledUndo>
            <StyledInput onChange={(e) => setName(e.target.value)} type="text" placeholder="Name of playlist..." />
            <StyledAddBtn onClick={addPlaylist}>Create</StyledAddBtn>
            
          </Box>
        </Popper>
        
        {playlists && playlists.map((list: List) => {
          return <PlaylistItem key={list._id} data={[list, removePlaylist]} />
        })}
      </StyledGridDiv>
    </StyledWrapper>
      
      
    
      )

}

export default MyPlaylistsPage;