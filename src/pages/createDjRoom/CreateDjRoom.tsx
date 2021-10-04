import React, { useState, useRef } from 'react';
import HeadsetRoundedIcon from '@material-ui/icons/HeadsetRounded';
import InsertPhotoRoundedIcon from '@material-ui/icons/InsertPhotoRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Switch from '@mui/material/Switch';

import {
  StyledWrapper,
  StyledForm,
  StyledTextInput,
  StyledLabel,
  StyledTextBox,
  StyledTitle,
  StyledCreateBtn,
  StyledBotSection,
  StyledSpan,
  StyledStatusText
} from "./StyledCreateDjRoom";
import { useParams } from 'react-router';


const CreateDjRoom = () => {
  const statusRef = useRef<any>('online');
  const [status, setStatus] = useState(false);
  const [checked, setChecked] = useState<boolean>(true);

  const { id }: any = useParams();
  
  const handleCreateDjRoom = () => {
    if (id) {
      // logic to DB
    }
    //else ...
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setStatus(!status)
    console.log(status, 'Switch-Status')
  };
  
  return (
    <StyledWrapper>
      <StyledForm>
        <div>
        <StyledTitle>CREATING DJ ROOM</StyledTitle>
        <StyledLabel>Room Name:</StyledLabel>
        <HeadsetRoundedIcon style={{color: 'purple'}}/><StyledTextInput type="text" placeholder="Room Name" />
        <StyledLabel>Image:</StyledLabel>
        <InsertPhotoRoundedIcon style={{color: 'purple'}}/><StyledTextInput type="text" placeholder="Image URL" />
        <StyledLabel>Description:</StyledLabel>
          <DescriptionRoundedIcon style={{ color: 'purple' }} /><StyledTextBox maxLength={50} placeholder="Description" />
          <div>
            {!status ? <StyledStatusText status={status}>The room is currenlty available for anyone.</StyledStatusText> 
            : <StyledStatusText status={status}>The room is currently only available for you.</StyledStatusText>}
          <Switch
            checked={checked}
            onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              value={status}
            /> <span>{status ? 'Offline' : 'Online'}</span>
            </div>
          <StyledCreateBtn onClick={handleCreateDjRoom}><StyledSpan>Create</StyledSpan><AddRoundedIcon/></StyledCreateBtn>
          </div>
      </StyledForm>
    </StyledWrapper>
  );

}

export default CreateDjRoom;