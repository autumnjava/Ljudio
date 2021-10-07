import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { useContext, useEffect, useState } from 'react';
import { PlaylistContext } from '../../contexts/playlistsContext/PlaylistContextProvider';
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
  maxHeight: '70vh',
  overflowY: 'scroll' as const,
  bgcolor: 'black',
  color: 'white',
  boxShadow: 24,
  p: 1,
};

const DjRoomOwnersPlaylistModal = ({ open, setOpen, playListId }: Props) => {

  const { playlist, getSongsFromPlaylist, setCurrentSong } = useContext(PlaylistContext);
  const [userId, setUserId] = useState<string | null>();
  
  useEffect(() => {

    setUserId(localStorage.getItem('userId'));
  }, [])

  useEffect(() => {
    if (userId && playListId) {
      playlistSongs(playListId);
    }
  }, [!userId, !playlist, playListId]);



  const playlistSongs = async (id: string) => {
    await getSongsFromPlaylist(id);
  }

  const printDuration = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (+seconds < 10 ? '0' : '') + seconds;
  }

 
  const renderSongs = (song: SongProps, key: string) => (
    <StyledSongWrapper key={key} onClick={() => setCurrentSong([song])}>
      <StyledSongImg src={song.image} alt="" />
      <StyledSongs>{song.title}</StyledSongs>
      <p>{printDuration(song.duration)}</p>
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
        <StyledTitleWrapper>
          <StyledTitle>Playlist name</StyledTitle>
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
        {playlist.songs && playlist.songs.map((song: SongProps) => renderSongs(song, song._id))}
      </Box>
    </Modal>
  )
}

export default DjRoomOwnersPlaylistModal; 