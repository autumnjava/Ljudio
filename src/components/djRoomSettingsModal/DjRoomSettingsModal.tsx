import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import EditIcon from '@material-ui/icons/Edit';
import {StyledTitle, StyledText} from './StyledDjRoomSettings'

interface Props {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
  };

const DjRoomSettingsModal = ({open, setOpen}: Props) => {

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <StyledTitle style={{ color: 'black' }}>Edit DJ room</StyledTitle>
        <StyledText><EditIcon/> Room name</StyledText>
        <StyledText><EditIcon/> Image URL</StyledText>
        <StyledText><EditIcon/> Description</StyledText>
      </Box>
    </Modal>
  )
}

export default DjRoomSettingsModal;