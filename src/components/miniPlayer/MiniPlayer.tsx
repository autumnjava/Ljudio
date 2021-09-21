import {
  StyledNavWrapper,
  StyledIconsWrapper
} from './StyledMiniPlayer'
import BottomNavigation from '@mui/material/BottomNavigation';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';


const MiniPlayer = () => {
  return (
    <>
    <StyledNavWrapper>
        <BottomNavigation style={{ background: 'black', opacity: '80%', display: 'grid' }} sx={{ width: '100vw' }}>
          <StyledIconsWrapper>
            <SkipPreviousIcon style={{
              alignSelf: 'center',
              justifySelf: 'center',
              fontSize: '2.5rem',
              color: 'white'
            }} />
            <PlayArrowIcon style={{
              alignSelf: 'center',
              fontSize: '3.5rem',
              color: 'white'
            }} />
            <SkipNextIcon style={{
              alignSelf: 'center',
              justifySelf: 'center',
              fontSize: '2.5rem',
              color: 'white'
            }} />
          </StyledIconsWrapper>
      </BottomNavigation>
    </StyledNavWrapper>
    </>
  )
}

export default MiniPlayer;