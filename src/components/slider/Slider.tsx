import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {
  StyledWrapper,
  StyledCurrentTime,
  StyledEndTime
}from './StyledSlider'

interface Props {
  duration: number;
  currentTime: number;
  setCurrentTime: React.Dispatch<any>
  youtubeEvent: any
}

const Sliders = ({ duration, currentTime, setCurrentTime, youtubeEvent }: Props) => {
  
  const calculateMinutes = (millis: number) => {
    const min = Math.floor((millis / 1000 / 60) << 0);
    const sec = Math.floor((millis / 1000) % 60);

    return min + ':' + sec;
  }

  const handleChange = async(e: any) => {
    await setCurrentTime(e.target.value)
    youtubeEvent.target.seekTo((currentTime / 1000), true)
  } 

  return (
    <StyledWrapper>
    <StyledCurrentTime>00:00</StyledCurrentTime>
      <Box width={230} style={{width: '65vw',alignSelf: 'center'}}>
      <Slider
          size="small"
          defaultValue={0}
          aria-label="Small"
          valueLabelDisplay="off"
          max={duration}
          onChange={(e) => handleChange(e)}
          value={currentTime}
          step={1000}
      />
      </Box>
      <StyledEndTime>{calculateMinutes(duration)}</StyledEndTime> 
    </StyledWrapper> 
  )
}

export default Sliders;