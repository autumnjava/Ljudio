import { StyledPlayerWrapper } from './StyledPlayer'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';

export const renderIcons = (
  expandPlayer: boolean,
  renderExpanedPlayerIcons: any,
  handlePreviousSong: any,
  play: any,
  handlePlay: any,
  handlePaus: any,
  handleNextSong: any
  ) => (
      <StyledPlayerWrapper expanded={expandPlayer ? true : false}>
      {expandPlayer && renderExpanedPlayerIcons()}
      <SkipPreviousIcon style={{
        alignSelf: !expandPlayer ? 'center' : 'start',
        justifySelf: 'end',
        fontSize: !expandPlayer ? '2.5rem' : '4.5rem',
        color: 'white'
      }} onClick={handlePreviousSong}/>
     {play ? <PlayArrowIcon style={{
        alignSelf: !expandPlayer ? 'center' : 'start',
        justifySelf: 'center',
        fontSize: !expandPlayer ? '3.5rem' : '4.5rem',
        color: 'white'
      }}
      onClick={handlePlay}/>
      :
        <PauseIcon style={{
          alignSelf: !expandPlayer ? 'center' : 'start',
          justifySelf: 'center',
          fontSize: !expandPlayer ? '3.5rem' : '4.5rem',
          color: 'white'
        }}
          onClick={handlePaus}/>}
      <SkipNextIcon style={{
        alignSelf: !expandPlayer ? 'center' : 'start',
        justifySelf: 'start',
        fontSize: !expandPlayer ? '2.5rem' : '4.5rem',
        color: 'white'
      }} onClick={handleNextSong} />
    </StyledPlayerWrapper>
)

