import Modal from '@mui/material/Modal';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { StyledTitle, StyledText, StyledInput, StyledEditWrapper, StyledModal, StyledWarrningText } from './StyledDjRoomSettings'
import Switch from '@mui/material/Switch';
import { useContext, useEffect, useState } from 'react';
import { DjRoomContext } from '../../contexts/djRoomContext/djRoomContextProvider';

interface Props {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  data: any
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

const DjRoomSettingsModal = ({ open, setOpen, data }: Props) => {

  const { changeStatusDjRoom, changeDjRoomSettings } = useContext(DjRoomContext);
  
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState('Room name');
  const [editImg, setEditImg] = useState(false);
  const [img, setImg] = useState('Image URL');
  const [editDesc, setEditDesc] = useState(false);
  const [desc, setDesc] = useState('Description');
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (data.djRoom) {
      setName(data.djRoom.name);
      setImg(data.djRoom.image);
      setDesc(data.djRoom.description);
      Object.keys(data.playlist.songs).length == 0 ? setChecked(false) : setChecked(data.djRoom.isOnline);
    }
  },[data.djRoom])

  const handleClose = () => {
    setOpen(false);
  }

  const handleEdit = async (edit: React.Dispatch<React.SetStateAction<boolean>>) => {
    const settingInputs = {
      name: data.djRoom.name == name ? data.djRoom.name : name,
      description: data.djRoom.description == desc ? data.djRoom.description : desc,
      imgUrl: data.djRoom.image == img ? data.djRoom.image : img
    }
    await changeDjRoomSettings(data.djRoom._id, settingInputs);
    edit(false);
  }
  
  const handleToggle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Object.keys(data.playlist.songs).length) {
      setChecked(e.target.checked);
      await changeStatusDjRoom(data.djRoom._id, e.target.checked);
    }
    
  }

  const renderContent = () => (
    <>
    {data.djRoom && <StyledModal>
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

        <StyledText style={{marginBottom: '0'}}>Online <Switch onChange={(e) => handleToggle(e)} checked={checked} /></StyledText>
        {checked && <StyledWarrningText>If you switch to offline, then the visitors will be kicked out from the room</StyledWarrningText>}
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