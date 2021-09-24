import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

interface ModalProps {
  open: boolean,
  handleClose: () => void
}

const ForgotPasswordModal = (props: ModalProps): JSX.Element => {
  const {
    open,
    handleClose
  } = props;

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Forgot your password?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Don&apos;t worry, happens to the best of us.
          </Typography>
        </Box>
      </Modal>
  )
}

export default ForgotPasswordModal;