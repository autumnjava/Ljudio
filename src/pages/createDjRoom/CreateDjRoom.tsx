import React, { useState, useEffect, useContext } from 'react';
import HeadsetRoundedIcon from '@material-ui/icons/HeadsetRounded';
import InsertPhotoRoundedIcon from '@material-ui/icons/InsertPhotoRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { DjRoomContext } from '../../contexts/djRoomContext/djRoomContextProvider';
import Switch from '@mui/material/Switch';

import {
  StyledWrapper,
  StyledForm,
  StyledTextInput,
  StyledLabel,
  StyledTextBox,
  StyledTitle,
  StyledCreateBtn,
  StyledSpan,
  StyledStatusText
} from "./StyledCreateDjRoom";

const CreateDjRoom = () => {
  const { createDjRoom } = useContext(DjRoomContext)
  
  const [status, setStatus] = useState(true);
  const [checked, setChecked] = useState<boolean>(true);
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState<string | null>('');
  
  const createnewDjRoom = async (e:any) => {
    e.preventDefault();
    const input = {
      name: name,
      description: description,
      imgUrl: imgUrl,
      isOnline: status
    }
    await createDjRoom(userId, input);
  }

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUserId(userId);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setStatus(!status)
  };
  
  return (
    <StyledWrapper>
      <StyledForm>
        <div>
          <StyledTitle>CREATING DJ ROOM</StyledTitle>
          <StyledLabel>Room Name:</StyledLabel>
          <HeadsetRoundedIcon style={{color: 'purple'}}/><StyledTextInput type="text" placeholder="Room Name" onChange={(e) => setName(e.target.value)}/>
          <StyledLabel>Image:</StyledLabel>
          <InsertPhotoRoundedIcon style={{color: 'purple'}}/><StyledTextInput type="text" placeholder="Image URL" onChange={(e) => setImgUrl(e.target.value)}/>
          <StyledLabel>Description:</StyledLabel>
          <DescriptionRoundedIcon style={{ color: 'purple' }} /><StyledTextBox maxLength={50} placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
          <div>
            {!status ? <StyledStatusText status={status}>The room is currenlty available for anyone.</StyledStatusText> 
            : <StyledStatusText status={status}>The room is currently only available for you.</StyledStatusText>}
          <Switch
            checked={checked}
            onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              value={status}
            />
            <span>{status ? 'Online' : 'Offline'}</span>
          </div>
        <StyledCreateBtn typeof="button" onClick={(e) => createnewDjRoom(e)}><StyledSpan>Create</StyledSpan><AddRoundedIcon/></StyledCreateBtn>
        </div>
      </StyledForm>
    </StyledWrapper>
  );

}

export default CreateDjRoom;