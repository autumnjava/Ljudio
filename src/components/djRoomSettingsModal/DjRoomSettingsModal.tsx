import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DjRoomSettingsModal = () => {

  const [open, setOpen] = useState(false);


  const handleClose = () => {
    //fds
  }

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box>
        
      </Box>
    </Modal>
  )
}

export default DjRoomSettingsModal;