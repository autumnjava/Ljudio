import { useHistory } from "react-router-dom";


import {
  StyledItemDiv,
  StyledImg,
  StyledPlaylistWrapper,
  StyledListTitle,
  StyledIconWrapper
} from "./StyledHomePlaylistItem";
import logo from "../../pages/landingPage/videos/playlist-logo.png"



// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const HomePlaylistItem = ({ data }: any) => {

  const history = useHistory();

  const handleDjroom = () => {
    history.push(`/createDjRoom/${data[0]._id}`);
  }
  
  return (
    <>
      <StyledPlaylistWrapper>
        <StyledItemDiv onClick={() => history.push("/playlist/" + data[0]._id)}>
        <div>
          <StyledImg src={logo} alt="" />
        </div>
        <StyledListTitle>{data[0].name}</StyledListTitle>
        </StyledItemDiv>

        </StyledPlaylistWrapper>
    </>
  );
}

export default HomePlaylistItem;