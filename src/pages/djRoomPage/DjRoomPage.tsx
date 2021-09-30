import {StyledWrapper, StyledSettingsWrapper} from './StyledDjRoomPage'
import Bubbels from '../../components/bubbels/Bubbels'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

const DjRoomPage = () => {
  return (
    <StyledWrapper>
      <StyledSettingsWrapper>
        <ExitToAppIcon />
        <SettingsIcon style={{float: 'right'}}/>
      </StyledSettingsWrapper>
      <Bubbels />
    </StyledWrapper>  
  );
}

export default DjRoomPage;