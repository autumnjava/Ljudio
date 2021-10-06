import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { StyledTitle, StyledText, StyledInput, StyledEditWrapper, StyledModal } from './StyledDjRoomSettings'
import Switch from '@mui/material/Switch';
import { useContext, useEffect, useState } from 'react';
import { DjRoomContext } from '../../contexts/djRoomContext/djRoomContextProvider';

interface Props {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
interface djRoomProps{
  name: string,
  description: string,
  imgUrl: string,
}

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    outline: 'none',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'red',
    color: 'white',
    boxShadow: 24,
    p: 1,
  };

const DjRoomSettingsModal = ({ open, setOpen }: Props) => {

  const { djRoom, changeStatusDjRoom, changeDjRoomSettings } = useContext(DjRoomContext);
  
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState('Room name');
  const [editImg, setEditImg] = useState(false);
  const [img, setImg] = useState('Image URL');
  const [editDesc, setEditDesc] = useState(false);
  const [desc, setDesc] = useState('Description');
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (djRoom.djRoom) {
      setName(djRoom.djRoom.name);
      setImg(djRoom.djRoom.image);
      setDesc(djRoom.djRoom.description);
    }
  },[!djRoom.djRoom])

  const handleClose = () => {
    setOpen(false);
  }

  const handleEdit = async (edit: React.Dispatch<React.SetStateAction<boolean>>) => {
    const settingInputs = {
      name: djRoom.djRoom.name !== name ? name : djRoom.djRoom.name,
      description: djRoom.djRoom.description !== desc ? desc : djRoom.djRoom.description,
      imgUrl: djRoom.djRoom.image !== img ? img : djRoom.djRoom.image
    }
    await changeDjRoomSettings(djRoom.djRoom._id, settingInputs);
    edit(false);
  }

  const renderContent = () => (
    <>
    {djRoom.djRoom && <StyledModal>
      <StyledTitle>Edit DJ room</StyledTitle>
      {!editName && <StyledText><EditIcon onClick={() => setEditName(true)} style={{ cursor: 'pointer' }} /> {name}</StyledText>}
      {editName && <StyledEditWrapper><CheckIcon onClick={() => handleEdit(setEditName)} style={{ color: 'white' }} />
        <StyledInput onChange={e => setName(e.target.value)} type="text" /></StyledEditWrapper>}
      
      {!editImg && <StyledText><EditIcon onClick={() => setEditImg(true)} style={{ cursor: 'pointer' }} /> {img}</StyledText>}
      {editImg && <StyledEditWrapper><CheckIcon onClick={() => handleEdit(setEditImg)} style={{ color: 'white' }} />
        <StyledInput onChange={e => setImg(e.target.value)} type="text" /></StyledEditWrapper>}
      
      {!editDesc && <StyledText><EditIcon onClick={() => setEditDesc(true)} style={{ cursor: 'pointer' }} /> {desc}</StyledText>}
      {editDesc && <StyledEditWrapper><CheckIcon onClick={() => handleEdit(setEditDesc)} style={{ color: 'white' }} />
        <StyledInput onChange={e => setDesc(e.target.value)} type="text" /></StyledEditWrapper>}

      <StyledText>Online <Switch onChange={e => setChecked(e.target.checked)} defaultChecked /></StyledText>
      </StyledModal>}
    </>
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