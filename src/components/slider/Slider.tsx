import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {
  StyledWrapper,
  StyledCurrentTime,
  StyledEndTime
}from './StyledSlider'

interface Props {
  width: number;
  duration: number;
}

const Sliders = ({ width, duration}: Props) => {
  
  const calculateMinutes = (millis: number) => {
    const min = Math.floor((millis / 1000 / 60) << 0);
    const sec = Math.floor((millis / 1000) % 60);

    return min + ':' + sec;
  }
  
  return (
    <StyledWrapper>
    <StyledCurrentTime>00:00</StyledCurrentTime>
      <Box width={width} style={{alignSelf: 'center'}}>
      <Slider
          size="small"
          defaultValue={0}
          aria-label="Small"
          valueLabelDisplay="off"
          max={duration}
          step={1000}
      />
      </Box>
      <StyledEndTime>{calculateMinutes(duration)}</StyledEndTime> 
    </StyledWrapper> 
  )
}

export default Sliders;