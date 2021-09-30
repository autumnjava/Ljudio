import HeadsetRoundedIcon from '@material-ui/icons/HeadsetRounded';
import InsertPhotoRoundedIcon from '@material-ui/icons/InsertPhotoRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import {
  StyledWrapper,
  StyledForm,
  StyledTextInput,
  StyledLabel,
  StyledTextBox,
  StyledTitle
} from "./StyledCreateDjRoom";


const CreateDjRoom = () => {

  
  return (
    <StyledWrapper>
      <StyledForm>
        <StyledTitle>CREATING DJ ROOM</StyledTitle>

        <StyledLabel>Room Name:</StyledLabel>
        <HeadsetRoundedIcon style={{color: 'purple'}}/><StyledTextInput type="text" placeholder="Room Name" />
        <StyledLabel>Image:</StyledLabel>
        <InsertPhotoRoundedIcon style={{color: 'purple'}}/><StyledTextInput type="text" placeholder="Image URL" />
        <StyledLabel>Description:</StyledLabel>
        <DescriptionRoundedIcon style={{color: 'purple'}}/><StyledTextBox maxLength={50} placeholder="Description" />
      </StyledForm>
    </StyledWrapper>
  );

}

export default CreateDjRoom;