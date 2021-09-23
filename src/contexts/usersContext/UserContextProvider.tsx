import { createContext, useState } from 'react';

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

  sendRequest(requestBody);
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
  
    sendRequest(requestBody);
    }

    const logout = () => {
      console.log('logging out.')
      setToken(null);
      setUserId(null);
    }

  const sendRequest = async (requestBody: Record<string, string>) => {
    setErrorMsg(false);
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.status !== 200 && res.status !== 201){
        setErrorMsg(true);
        throw new Error('Failed')
      }
      return res.json();
    })
    .then(resData => {
      setErrorMsg(false);
      if(resData.data.createUser) { console.log('successfully registered'); }
      else if(resData.data.login.token){
        console.log('succesfully logged in');
        setToken(resData.data.login.token);
        setUserId(resData.data.login.userId);
      }
    })
    .catch(err => {
      console.log(err, 'or this?')
      setErrorMsg(true);
    });
  }

  const values = {
    registerUser,
    login,
    logout,
    errorMsg,
    token,
    userId
  }

  return (
    <UserContext.Provider value={values}>
       { children }
    </UserContext.Provider>
  );
}