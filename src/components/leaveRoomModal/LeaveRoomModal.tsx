import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from "../../contexts/usersContext/UserContextProvider";
import { DjRoomContext } from '../../contexts/djRoomContext/djRoomContextProvider'
import { useParams, useHistory } from "react-router-dom";
import {StyledModal, StyledHeader, StyledButton, StyledButtonWrapper} from './StyledLeaveRoomModal'

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LeaveRoomModal = ({ open, setOpen }: Props) => {

  const { id }: any = useParams();
  const history = useHistory();
  const { iAm } = useContext(UserContext);
  const { changeStatusDjRoom, disjoinDjRoom } = useContext(DjRoomContext);

  const handleLeaveRoom = () => {
    if (iAm) {
      changeStatusDjRoom(id, false)
      disjoinDjRoom(localStorage.getItem('userId'))
      history.push('/myPlaylist');
    } else {
      disjoinDjRoom(localStorage.getItem('userId'))
      history.push('/myPlaylist');
    }
  }
  

  const renderContent = () => (
    <StyledModal>
      <StyledHeader>Are you sure you want to leave the room?</StyledHeader>
      <StyledButtonWrapper>
        <StyledButton onClick={() => handleLeaveRoom()}>Yes</StyledButton>
        <StyledButton onClick={() => setOpen(false)}>No</StyledButton>
      </StyledButtonWrapper>
    </StyledModal>
  )

  return (
    <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      {renderContent()}
    </Modal>
  )
}

export default LeaveRoomModal;