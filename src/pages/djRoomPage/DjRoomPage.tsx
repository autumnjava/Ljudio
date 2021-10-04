import {StyledWrapper, StyledSettingsWrapper} from './StyledDjRoomPage'
import Bubbels from '../../components/bubbels/Bubbels'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import DjRoomSettingsModal from '../../components/djRoomSettingsModal/DjRoomSettingsModal'
import ShareIcon from '@material-ui/icons/Share';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/usersContext/UserContextProvider';
import SnackBar from '../../components/snackBar/SnackBar'
import DjRoomOwnersPlaylistModal from '../../components/djRoomOwnersPlaylistModal/DjRoomOwnersPlaylistModal'
import { useHistory } from 'react-router';

const DjRoomPage = () => {

  const [openSettingsModal, setOpenSettingsModal] = useState(false);
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { setInDjRoom } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    setInDjRoom(true);
  }, [])

  const handleCopy = () => {
  setOpenSnackBar(true);
  const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

    const handleExit = () => {
    setInDjRoom(false)
    history.push('/myPlaylist');
  }
  
  const renderIcons = () => (
    <>
      <ExitToAppIcon onClick={handleExit} style={{cursor: 'pointer' }}/>
      <SettingsIcon onClick={() => setOpenSettingsModal(true)} style={{ float: 'right', cursor: 'pointer' }} />
      <ShareIcon onClick={handleCopy} style={{ float: 'right', marginRight: '1rem', cursor: 'pointer' }} />
      <QueueMusicIcon onClick={() => setOpenPlaylistModal(true)} style={{ float: 'right', marginRight: '1rem', cursor: 'pointer' }}/>
    </>
  )

  return (
  <StyledWrapper>
    <StyledSettingsWrapper>{renderIcons()}</StyledSettingsWrapper>
    <Bubbels />
      <DjRoomSettingsModal open={openSettingsModal} setOpen={setOpenSettingsModal} />
      <DjRoomOwnersPlaylistModal open={openPlaylistModal} setOpen={setOpenPlaylistModal}/>
    {openSnackBar && <SnackBar
        snackbarContent="Copied!"
        open={openSnackBar}
        setOpen={setOpenSnackBar}
      />}      
  </StyledWrapper>  
  );
}

export default DjRoomPage;