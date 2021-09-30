import {
  StyledWrapper,
  StyledForm,
  StyledTextInput,
  StyledLabel,
  StyledTextBox
} from "./StyledCreateDjRoom";


const CreateDjRoom = () => {

  
  return (
    <StyledWrapper>
      <StyledForm>
        <p>CREATING DJ ROOM</p>

        <StyledTextInput type="text" placeholder="Room Name" />
        <StyledTextInput type="text" placeholder="Image URL" />
        <StyledTextBox placeholder="Description" />
        
      </StyledForm>
    </StyledWrapper>
  );

}

export default CreateDjRoom;