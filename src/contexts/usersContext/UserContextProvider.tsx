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

  const [errorMsg, setErrorMsg] = useState(false)

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
  } else {
    if(response.data.createUser) { console.log('successfully registered'); }

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
      setErrorMsg(true);
    } else {
      if(response.data.login.token){
        localStorage.setItem('JWT_KEY', response.data.login.token);
        localStorage.setItem('userId', response.data.login.userId);
        setToken(response.data.login.token);
        setUserId(response.data.login.userId);
      }
    }
    }

    const logout = () => {
      localStorage.removeItem('JWT_KEY');
      localStorage.removeItem('userId');
      setUserId(null);
      setToken(null)
    }

  const values = {
    registerUser,
    login,
    logout,
    errorMsg,
    userId
  }

  return (
    <UserContext.Provider value={values}>
       { children }
    </UserContext.Provider>
  );
}