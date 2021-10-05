import {StyledWrapper, StyledSettingsWrapper} from './StyledDjRoomPage'
import Bubbels from '../../components/bubbels/Bubbels'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import DjRoomSettingsModal from '../../components/djRoomSettingsModal/DjRoomSettingsModal'
import ShareIcon from '@material-ui/icons/Share';
import { useState, useContext, useEffect } from 'react';
import SnackBar from '../../components/snackBar/SnackBar'
import { DjRoomContext } from '../../contexts/djRoomContext/djRoomContextProvider';
import { useParams } from "react-router-dom";
import { UserContext } from '../../contexts/usersContext/UserContextProvider';
import { useHistory } from 'react-router';
import DjRoomOwnersPlaylistModal from '../../components/djRoomOwnersPlaylistModal/DjRoomOwnersPlaylistModal'

const DjRoomPage = () => {
  const { id }: any = useParams();
  const [openSettingsModal, setOpenSettingsModal] = useState(false);
  const [openPlaylistModal, setOpenPlaylistModal] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { djRoom, getDjRoom } = useContext(DjRoomContext);
  // const [userId, setUserId] = useState<string | null>();
  // const [isOwner, setIsOwner] = useState(false);
  const { setInDjRoom } = useContext(UserContext);
  const history = useHistory();
  
  useEffect(() => {
    // const userId = localStorage.getItem('userId');
    // setUserId(userId);
    getCurrentDjRoom();
    setInDjRoom(true);
  }, []);

  // dont know if needed if subscription listens to new visitors????
  useEffect(() => {
    console.log('Dj room has been updated');
  }, [djRoom]);

  const getCurrentDjRoom = async () => {
    await getDjRoom(id);
  }

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
    {Object.prototype.toString.call(djRoom) === '[object Object]' && <Bubbels data={djRoom} />}
      <DjRoomSettingsModal open={openSettingsModal} setOpen={setOpenSettingsModal} />
      <DjRoomOwnersPlaylistModal open={openPlaylistModal} setOpen={setOpenPlaylistModal} djRoomId={id}/>
    {openSnackBar && <SnackBar
        snackbarContent="Copied!"
        open={openSnackBar}
        setOpen={setOpenSnackBar}
      />}      
  </StyledWrapper>  
  );
}

export default DjRoomPage;