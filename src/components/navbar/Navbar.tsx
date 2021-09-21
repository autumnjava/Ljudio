import React from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useHistory } from "react-router-dom";
import { StyledNavWrapper } from "./StyledNavBar";


const Navbar: React.FC = () => {

  const history = useHistory();
  const [value, setValue] = React.useState('');
  

  return (
    <StyledNavWrapper>
      <BottomNavigation sx={{ width: '100vw' }} value={value} >
        <BottomNavigationAction
          onClick={() => history.push('/home')}
          label="Home"
          value={value}
          icon={<HomeRoundedIcon color="secondary" />}
      />
        <BottomNavigationAction
        label="My Playlist"
          value={value}
          onClick={() => history.push("/myPlaylist")}
        icon={<QueueMusicRoundedIcon color="secondary" />}
      />
      <BottomNavigationAction
        label="Search"
          value={value}
          onClick={() => history.push("/search")}
        icon={ <SearchRoundedIcon color="secondary" />}
      />
      <BottomNavigationAction
        label="Profile"
          value={value}
          onClick={() => history.push("/profile")}
        icon={<AccountCircleRoundedIcon color="secondary" />}
      />

        </BottomNavigation>
    </StyledNavWrapper>
  )
}


export default Navbar;