import { createContext, useState } from 'react';
import fetcher from '../fetcher';

type Props = {
  children?: JSX.Element
}

type User = {
  email: string,
  password: string,
  username: string
}

export const UserContext = createContext<any>(null);

export const UserProvider: React.FC<Props> = ({ children }: Props) => {

  const[token, setToken] = useState(null);
  const[userId, setUserId] = useState(null);
  const [user, setUser] = useState({});
  const [errorMsg, setErrorMsg] = useState(false);
  const [inDjRoom, setInDjRoom] = useState(false);
  const [iAm, setIAm] = useState(null);

  const registerUser = async (user: User) => {
    const requestBody = {
      query: `mutation {
      createUser(input: {email: "${user.email}", password: "${user.password}", username: "${user.username}"})
      {
        _id
        email
        username
      }
    }`
  }

  const response = await fetcher(requestBody);
  if (!response.data) {
    setErrorMsg(true);
    return false;
  } else {
    if (response.data.createUser) { console.log('successfully registered'); }
    return true;
  }
  }

  const login = async (user: User) => {
    const requestBody = {
      query: `query {
        login(email: "${user.email}", password: "${user.password}")
        {
          userId
          token
          tokenExpiration
        }
      }`
    }
  
    const response = await fetcher(requestBody);
    if (!response.data) {
      return false; // failed to login
    } else {
      if(response.data.login.token){
      localStorage.setItem('JWT_KEY', response.data.login.token);
      localStorage.setItem('userId', response.data.login.userId);
      return true; // successfully logged in
      }
    }
    }

    const logout = () => {
      localStorage.removeItem('JWT_KEY');
      localStorage.removeItem('userId');
    }
  
  const getUser = async (userId: string) => {
    const requestBody = {
      query: `query {
        getUser(_id: "${userId}")
        {
          _id
          username
          email
        }
      }`
    }

    const response = await fetcher(requestBody);
    if (!response.data) {
      setErrorMsg(true);
    } else {
      setUser(response.data.getUser);
      setErrorMsg(false);
    }
  }
  
  const changeUsername = async (userId: string, newName: string) => {
    const requestBody = {
      query: `mutation {
        changeUsername(_id: "${userId}", newName: "${newName}")
        {
          _id
          username
          email
        }
      }`
    }

    const response = await fetcher(requestBody);
    if (!response.data) {
      setErrorMsg(true);
    } else {
      getUser(userId);
      setErrorMsg(false);
    }
  }

  const whatAmI = async (userId: string) => {
    const requestBody = {
      query: `query {
        whatAmI(_id: "${userId}")
      }`
    }
    const response = await fetcher(requestBody);
    if (!response.data) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      setIAm(response.data.whatAmI);
    }
  }

  

  const values = {
    iAm,
    whatAmI,
    getUser,
    changeUsername,
    registerUser,
    login,
    logout,
    errorMsg,
    userId,
    user,
    inDjRoom,
    setInDjRoom
  }

  return (
    <UserContext.Provider value={values}>
       { children }
    </UserContext.Provider>
  );
}