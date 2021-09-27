import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface Props {
  width: number;
}

const Sliders = ({width}: Props) => {
  
  return (
    <Box style={{paddingLeft: '1rem'}} width={width}>
      <Slider
      size="small"
      defaultValue={0}
      aria-label="Small"
      valueLabelDisplay="on"
      />
    </Box>
  )
}

export default Sliders;