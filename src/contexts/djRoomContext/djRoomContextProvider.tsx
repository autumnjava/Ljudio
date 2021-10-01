import { createContext, useState } from 'react';
import fetcher from '../fetcher';

type Props = {
  children?: JSX.Element
}

interface djRoomProps{
  name: string,
  description: string,
  imgUrl: string,
  isOnline: boolean
}

export const DjRoomContext = createContext<any>(null);

export const DjRoomProvider: React.FC<Props> = ({ children }: Props) => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [ownersDjRooms, setOwnersDjRooms] = useState([]);
  const [activeDjRooms, setActiveDjRooms] = useState([]);
  const [djRoom, setDjRoom] = useState([]);

  const getActiveDjRooms = async () => {
    const requestBody = {
      query: `query {
        getActiveDjRooms(input: true){
          userCount
          name
          _id
          dj
        }
      }`
    }
    const response = await fetcher(requestBody);
    if (!response) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      setActiveDjRooms(response.data.getActiveDjRooms);
    }
  }

  const getOwnersDjRooms = async (userId: string) => {
    const requestBody = {
      query: ` query {
        getOwnersDjRooms(_id: "${userId}"){
          _id
          name
          description
          isOnline
          image
        }
      }
      `
    }
    const response = await fetcher(requestBody);
    if (!response) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      setOwnersDjRooms(response.data.getOwnersDjRooms);
    }
  }

  const getDjRoom = async (djRoomId: string) => {
    const requestBody = {
      query: `query {
        getDjRoom(_id: "${djRoomId}"){
          _id
          djRoom {
            _id
            name
            description
            isOnline
            image
          }
          playlist {
            _id
            name
            songs {
              _id
              title
              image
              duration
              videoId
            }
          }
          dj {
            _id
            username
          }
          visitors {
            _id
            username
          }
          count
        }
      }`
    }
    const response = await fetcher(requestBody);
    if (!response) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      setDjRoom(response.data.getDjRoom);
    }
  }


  const createDjRoom = async (userId: string, playlistId: string, input: djRoomProps) => {
    const requestBody = {
      query: `mutation{createDjRoom(
        userId: "${userId}",
        playlistId:"${playlistId}"
      input:{
        name:"${input.name}",
        description:"${input.description}",
        image:"${input.imgUrl}",
        isOnline: ${input.isOnline}})
      {
        _id
        name
      }
    }`
    }
    const response = await fetcher(requestBody);
    if (!response) {
      setErrorMsg(true);
    } else {
      console.log(response.data)
    }
  }

  
  const values = {
    getDjRoom,
    djRoom,
    activeDjRooms,
    getActiveDjRooms,
    getOwnersDjRooms,
    ownersDjRooms,
     createDjRoom
  }

  return (
    <DjRoomContext.Provider value={values}>
       { children }
    </DjRoomContext.Provider>
  );
}