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
      setErrorMsg(false);
    }
  }

  const deleteDjRoom = async () => {
    const requestBody = {
      query: ``
    }
    const response = await fetcher(requestBody);
    if (!response) {
      setErrorMsg(true);
    } else {
      console.log(response.data)
      setErrorMsg(false);
    }
  }

  const joinDjRoom = async (userId: string, djRoomId: string) => {
    const requestBody = {
      query: `mutation{joinDjRoom(
        _id:"${userId}",
        djRoomId:"${djRoomId}"
        ){
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
      setErrorMsg(false);
    }
  }
  
  const values = {
    createDjRoom,
    deleteDjRoom,
    joinDjRoom,
  }

  return (
    <DjRoomContext.Provider value={values}>
       { children }
    </DjRoomContext.Provider>
  );
}