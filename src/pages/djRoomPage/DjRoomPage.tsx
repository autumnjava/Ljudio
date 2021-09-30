import {StyledWrapper, StyledSettingsWrapper} from './StyledDjRoomPage'
import Bubbels from '../../components/bubbels/Bubbels'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import DjRoomSettingsModal from '../../components/djRoomSettingsModal/DjRoomSettingsModal'
import { useState } from 'react';

const DjRoomPage = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <StyledWrapper>
      <StyledSettingsWrapper>
        <ExitToAppIcon />
        <SettingsIcon onClick={() => setOpenModal(true)} style={{float: 'right'}}/>
      </StyledSettingsWrapper>
      <Bubbels />
      <DjRoomSettingsModal open={openModal} setOpen={setOpenModal}/>
    </StyledWrapper>  
  );
}

export default DjRoomPage;