import React from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HeadsetRoundedIcon from '@material-ui/icons/HeadsetRounded';
import { useHistory } from "react-router-dom";
import { StyledNavWrapper, StyledLabel } from "./StyledNavBar";


const Navbar: React.FC = () => {

  const history = useHistory();
  const [value, setValue] = React.useState('');
  
  return (
    <StyledNavWrapper>
      <BottomNavigation sx={{ width: '100vw' }} value={value}>
        <BottomNavigationAction
          label={<StyledLabel>Home</StyledLabel>}
          value={value}
          onClick={() => history.push('/home')}
          icon={<HomeRoundedIcon color="secondary" />}
        />
        <BottomNavigationAction
          label={<StyledLabel>DJ Rooms</StyledLabel>}
          value={value}
          onClick={() => history.push("/djrooms")}
          icon={<HeadsetRoundedIcon color="secondary" />}
      />
        <BottomNavigationAction
          label={<StyledLabel>My Playlists</StyledLabel>}
          value={value}
          onClick={() => history.push("/myPlaylist")}
          icon={<QueueMusicRoundedIcon color="secondary" />}
      />
      <BottomNavigationAction
          label={<StyledLabel>Search</StyledLabel>}
          value={value}
          onClick={() => history.push("/search")}
          icon={ <SearchRoundedIcon color="secondary" />}
      />
      <BottomNavigationAction
          label={<StyledLabel>Profile</StyledLabel>}
          value={value}
          onClick={() => history.push("/profile")}
          icon={<AccountCircleRoundedIcon color="secondary" />}
      />

        </BottomNavigation>
    </StyledNavWrapper>
  )
}


export default Navbar;