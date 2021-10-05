import { useHistory } from "react-router-dom";


import {
  StyledItemDiv,
  StyledImg,
  StyledPlaylistWrapper,
  StyledListTitle,
  StyledIconWrapper
} from "./StyledHomePlaylistItem";



// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const HomePlaylistItem = ({ data }: any) => {

  const history = useHistory();

  const handleDjroom = () => {
    history.push(`/createDjRoom/${data[0]._id}`);
  }
  
  return (
    <>
      <StyledPlaylistWrapper>
        <StyledIconWrapper>
        </StyledIconWrapper>
        <StyledItemDiv onClick={() => history.push("/playlist/" + data[0]._id)}>
        <div>
          <StyledImg src="https://i.postimg.cc/nVmnQDCz/analyze-sound-wave-music-512-362.png" alt="" />
        </div>
        <StyledListTitle>{data[0].name}</StyledListTitle>
        </StyledItemDiv>

        </StyledPlaylistWrapper>
    </>
  );
}

export default HomePlaylistItem;