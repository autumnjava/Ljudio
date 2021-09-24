import { Popper } from "@material-ui/core";
import { Fade } from "@mui/material";
import Box from '@mui/material/Box';
import { useState } from "react";
import PlaylistItem from "../../components/playlistItem/PlaylistItem";
import { StyledTitle, StyledAddPlaylistDiv, StyledGridDiv, StyledAddItem, StyledWrapper, StyledAddIcon, StyledListTitle} from "./StyledMyPlaylistPage";
import {PlaylistContext} from '../../contexts/playlistsContext/PlaylistContextProvider'
import { useContext, useEffect, useRef } from 'react';

interface List {
  name: string;
  _id: string;
}

const MyPlaylistsPage = () => {
  const { playlists, getUserPlaylists } = useContext(PlaylistContext)

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleCreate = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleAddPlaylist = () => {
    
    console.log("Add playlist function.")
     setOpen(false);
  }


  useEffect(() => {
    myPlaylists();
  }, [!playlists]);


  const myPlaylists = async () => {
    const userId = "614c45add183eb4b3d148816";
    await getUserPlaylists(userId);

    console.log('my playlists', playlists);
   
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
          <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            <input type="text" placeholder="Name of playlist..." />
            <button onClick={handleAddPlaylist}>Create</button>
            <span onClick={handleCreate}>[X]</span>
          </Box>
        </Popper>
        
        {playlists && playlists.map((list: List) => {
          return <PlaylistItem key={list._id} data={list} />
        })}
      </StyledGridDiv>
    </StyledWrapper>
      
      
    
      )

}

export default MyPlaylistsPage;