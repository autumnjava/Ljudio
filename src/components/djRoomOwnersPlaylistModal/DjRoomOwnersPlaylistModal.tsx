import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

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
  bgcolor: 'black',
  border: '2px solid #000',
  color: 'white',
  boxShadow: 24,
  p: 1,
};

const DjRoomOwnersPlaylistModal = ({ open, setOpen }: Props) => {
  
  return (
    <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <p>fdskf</p>
      </Box>
    </Modal>
  )
}

export default DjRoomOwnersPlaylistModal; 