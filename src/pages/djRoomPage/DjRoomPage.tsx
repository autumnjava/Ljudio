import {StyledWrapper, StyledSettingsWrapper} from './StyledDjRoomPage'
import Bubbels from '../../components/bubbels/Bubbels'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import DjRoomSettingsModal from '../../components/djRoomSettingsModal/DjRoomSettingsModal'
import ShareIcon from '@material-ui/icons/Share';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/usersContext/UserContextProvider';
import SnackBar from '../../components/snackBar/SnackBar'

const DjRoomPage = () => {

  const [openModal, setOpenModal] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { setInDjRoom } = useContext(UserContext);

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

  return (
  <StyledWrapper>
    <StyledSettingsWrapper>
      <ExitToAppIcon style={{cursor: 'pointer' }}/>
      <SettingsIcon onClick={() => setOpenModal(true)} style={{ float: 'right', cursor: 'pointer' }} />
        <ShareIcon onClick={handleCopy} style={{ float: 'right', marginRight: '1rem', cursor: 'pointer' }}/>
    </StyledSettingsWrapper>
    <Bubbels />
    <DjRoomSettingsModal open={openModal} setOpen={setOpenModal} />
    {openSnackBar && <SnackBar
        snackbarContent="Copied!"
        open={openSnackBar}
        setOpen={setOpenSnackBar}
      />}      
  </StyledWrapper>  
  );
}

export default DjRoomPage;