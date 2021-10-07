import { createContext, useState, useEffect } from 'react';
import fetcher from '../fetcher';


type Props = {
  children?: JSX.Element
}

interface djRoomProps{
  _id: string,
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
  const [djRoom, setDjRoom] = useState<any>([]);
  const [visitorsDjRoom, setVisitorsDjRoom] = useState<djRoomProps>();
  const [openSnackbar, setOpenSnackbar] = useState(false);

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

  const getVisitorsDjRoom = async (userId: string) => {
    const requestBody = {
      query: `query {
        getVisitorsDjRoom (_id: "${userId}") {
        _id
        name
        description
        isOnline
        image
      }
    }`
    }
    const response = await fetcher(requestBody);
    if (!response) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      setVisitorsDjRoom(response.data.getVisitorsDjRoom);
    }
  }


  const createDjRoom = async (userId: string, input: djRoomProps, playlistId: string) => {
    const requestBody = {
      query: `mutation{createDjRoom(
          userId: "${userId}",
          playlistId:"${playlistId ? playlistId : ''}"
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
      setErrorMsg(false);
      return response.data.createDjRoom._id
    }
  }

  const deleteDjRoom = async (djRoomId: string) => {
    const requestBody = {
      query: `mutation{
        deleteDjRoom(_id:"${djRoomId}")
        kickUsers(djRoomId:"${djRoomId}")}`
    }
    const response = await fetcher(requestBody);
    if (!response) {
      setErrorMsg(true);
    } else {
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
      setErrorMsg(false);
    }
  }

  const disjoinDjRoom = async (userId: string) => {
    const requestBody = {
      query: `mutation{disjoinDjRoom(_id: "${userId}")}`
    }
    const response = await fetcher(requestBody);
    if (!response) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
    }
  }

  const changeStatusDjRoom = async (djRoomId: string, isOnline: boolean) => {
    let requestBody = {};
    if (!isOnline) {
      requestBody = {
        query: `mutation{
          changeStatusDjRoom(_id:"${djRoomId}", isOnline: ${isOnline})
          kickUsers(djRoomId:"${djRoomId}")}`
      }
    } else {
      requestBody = {
        query: `mutation{changeStatusDjRoom(_id:"${djRoomId}", isOnline: ${isOnline})}`
      }
    }
    const response = await fetcher(requestBody);
    if (!response) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
    }
  }

  const changeDjRoomSettings = async (djRoomId: string, input: djRoomProps) => {
    const requestBody = {
      query: ` mutation{
        changeDjRoomSettings
        (
          _id:"${djRoomId}", 
          name:"${input.name ? input.name : ''}",
          description:"${input.description ? input.description : ''}",
          imgUrl:"${input.imgUrl ? input.imgUrl : ''}"
        )
      }`
    }
    const response = await fetcher(requestBody);
    if (!response) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
    }
  }



  
  const values = {
    visitorsDjRoom,
    getVisitorsDjRoom,
    deleteDjRoom,
    joinDjRoom,
    disjoinDjRoom,
    changeStatusDjRoom,
    changeDjRoomSettings,
    getDjRoom,
    djRoom,
    activeDjRooms,
    getActiveDjRooms,
    getOwnersDjRooms,
    ownersDjRooms,
    createDjRoom,
    setOpenSnackbar,
    openSnackbar,
  }

  return (
    <DjRoomContext.Provider value={values}>
       { children }
    </DjRoomContext.Provider>
  );
}