import DjRoomRowItem from "../../components/djRoomRowItem/DjRoomRowItem";
import {
  StyledWrapper,
  StyledPageTitle
} from "./StyledDjRoomPage";
import banner from "./images/banner.png"
import { DjRoomContext } from '../../contexts/djRoomContext/djRoomContextProvider';
import { useContext, useEffect } from 'react';

const DjRoomsPage = () => {
  const { activeDjRooms, getActiveDjRooms } = useContext(DjRoomContext);

  console.log('im inside dj rooms page')
  useEffect(() => {
    getAllDjRooms()
  }, []);

  const getAllDjRooms = async () => {
    console.log('im inside the call to get all dj rooms')
    await getActiveDjRooms();
  }

  console.log('what is all active dj rooms', activeDjRooms)

  return (
    <StyledWrapper>
      <StyledPageTitle>JOIN THE DJ ROOMS AND LISSTEN MUSIC TOGETHER!</StyledPageTitle>
      {activeDjRooms && activeDjRooms.map((room: any) => <DjRoomRowItem key={room._id} data={room} />)}
    </StyledWrapper>
  );
}

export default DjRoomsPage;