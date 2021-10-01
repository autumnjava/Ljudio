import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useContext, useEffect, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
import {StyledSongWrapper, StyledSongImg, StyledSongs} from './StyledDjRoomOwnersModal'

interface Props {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
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
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  maxHeight: '60vh',
  overflowY: 'scroll' as const,
  bgcolor: 'black',
  border: '2px solid #000',
  color: 'white',
  boxShadow: 24,
  p: 1,
};

const DjRoomOwnersPlaylistModal = ({ open, setOpen }: Props) => {

  const { playlist, getSongsFromPlaylist, setCurrentSong } = useContext(PlaylistContext);
  const [userId, setUserId] = useState<string | null>();
  
  useEffect(() => {
    setUserId(localStorage.getItem('userId'));
  }, [])

  useEffect(() => {
    if (userId) {
      playlistSongs();
    }
  }, [!userId, !playlist]);

  const playlistSongs = async () => {
    await getSongsFromPlaylist('614dcec7992e5906dc69de1f');
  }

  const renderSongs = (song: SongProps) => (
    <StyledSongWrapper>
      {console.log(song.image)}
      <StyledSongImg src={song.image} alt="" />
      <StyledSongs>{song.title}</StyledSongs>
    </StyledSongWrapper>
  )
  
  return (
    <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {playlist.songs && playlist.songs.map((song: SongProps) => (
          <StyledSongWrapper key={song._id}>
      <StyledSongImg src={song.image} alt="" />
      <StyledSongs>{song.title}</StyledSongs>
    </StyledSongWrapper>
        ))}
      </Box>
    </Modal>
  )
}

export default DjRoomOwnersPlaylistModal; 