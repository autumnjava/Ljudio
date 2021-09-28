import { StyledWrapper } from "./StyledDjRoomPage";
import DjRoomRowItem from "../../components/djRoomRowItem/DjRoomRowItem";

const DjRoomPage = () => {
  return (
    <StyledWrapper>
      <p>ALL ONLINE DJ ROOMS</p>
      <DjRoomRowItem/>
    </StyledWrapper>
  );
}

export default DjRoomPage;