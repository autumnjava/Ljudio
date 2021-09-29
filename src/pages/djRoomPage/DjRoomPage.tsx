import DjRoomRowItem from "../../components/djRoomRowItem/DjRoomRowItem";
import {
  StyledWrapper,
  StyledPageTitle
} from "./StyledDjRoomPage";
import banner from "./images/banner.png"

const DjRoomPage = () => {
  return (
    <StyledWrapper>
        <StyledPageTitle>JOIN THE DJ ROOMS AND LISSTEN MUSIC TOGETHER!</StyledPageTitle>
      <DjRoomRowItem/>
      <DjRoomRowItem/>
      <DjRoomRowItem/>
    </StyledWrapper>
  );
}

export default DjRoomPage;