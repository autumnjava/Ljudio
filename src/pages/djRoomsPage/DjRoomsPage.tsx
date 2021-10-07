import DjRoomRowItem from "../../components/djRoomRowItem/DjRoomRowItem";
import {
  StyledWrapper,
  StyledPageTitle,
  StyledItem
} from "./StyledDjRoomPage";
import banner from "./images/banner.png"
import { DjRoomContext } from '../../contexts/djRoomContext/djRoomContextProvider';
import { useContext, useEffect, useState } from 'react';

const DjRoomsPage:React.FC = () => {
  const { activeDjRooms, getActiveDjRooms, joinDjRoom } = useContext(DjRoomContext);
  const [userId, setUserId] = useState<string | null>('');


  useEffect(() => {
    getAllDjRooms();
  }, []);
  
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUserId(userId);
  }, []);
  
  const getAllDjRooms = async () => {
    await getActiveDjRooms();
  }

  const handleJoinDjRoom = async (djRoomId: string) => {
    await joinDjRoom(userId, djRoomId);
  }

  return (
    <StyledWrapper>
      <StyledPageTitle>JOIN THE DJ ROOMS AND LISTEN MUSIC TOGETHER!</StyledPageTitle>
      {activeDjRooms && activeDjRooms.map((room: any) => <StyledItem key={room._id}><DjRoomRowItem data={[room, handleJoinDjRoom]} /></StyledItem>)}
    </StyledWrapper>
  );
}

export default DjRoomsPage;