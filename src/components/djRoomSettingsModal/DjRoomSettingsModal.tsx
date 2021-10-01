import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { StyledTitle, StyledText, StyledInput, StyledEditWrapper } from './StyledDjRoomSettings'
import Switch from '@mui/material/Switch';
import { useState } from 'react';

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
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
  };

const DjRoomSettingsModal = ({ open, setOpen }: Props) => {
  
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState('Room name');
  const [editImg, setEditImg] = useState(false);
  const [img, setImg] = useState('Image URL');
  const [editDesc, setEditDesc] = useState(false);
  const [desc, setDesc] = useState('Description');
  const [checked, setChecked] = useState(true);

  const handleClose = () => {
    setOpen(false);
  }

  const handleEdit = (edit: React.Dispatch<React.SetStateAction<boolean>>) => {
    // functionality
    edit(false);
  }

  const renderContent = () => (
    <Box sx={style}>
      <StyledTitle style={{ color: 'black' }}>Edit DJ room</StyledTitle>
      {!editName && <StyledText><EditIcon onClick={() => setEditName(true)} style={{ cursor: 'pointer' }} /> {name}</StyledText>}
      {editName && <StyledEditWrapper><CheckIcon onClick={() => handleEdit(setEditName)} style={{ color: 'black' }} />
        <StyledInput onChange={e => setName(e.target.value)} type="text" /></StyledEditWrapper>}
      
      {!editImg && <StyledText><EditIcon onClick={() => setEditImg(true)} style={{ cursor: 'pointer' }} /> {img}</StyledText>}
      {editImg && <StyledEditWrapper><CheckIcon onClick={() => handleEdit(setEditImg)} style={{ color: 'black' }} />
        <StyledInput onChange={e => setImg(e.target.value)} type="text" /></StyledEditWrapper>}
      
      {!editDesc && <StyledText><EditIcon onClick={() => setEditDesc(true)} style={{ cursor: 'pointer' }} /> {desc}</StyledText>}
      {editDesc && <StyledEditWrapper><CheckIcon onClick={() => handleEdit(setEditDesc)} style={{ color: 'black' }} />
        <StyledInput onChange={e => setDesc(e.target.value)} type="text" /></StyledEditWrapper>}

      <StyledText>Online <Switch onChange={e => setChecked(e.target.checked)} defaultChecked /></StyledText>
    </Box>  
  )

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      {renderContent()}
    </Modal>
  )
}

export default DjRoomSettingsModal;