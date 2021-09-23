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

  const [errorMsg, setErrorMsg] = useState(false);

  const registerUser = async (user: User) => {
  const requestBody = {
    query: `mutation {
        createUser(input: {email: "${user.email}", password: "${user.password}", username: "${user.username}"})
        {
          _id
          email
          username
        }
      }
      `
    }
    
    const response = await fetcher(requestBody);

    if (!response.data) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
    }
  }

  const values = {
    registerUser,
    errorMsg
  }

  return (
    <UserContext.Provider value={values}>
       { children }
    </UserContext.Provider>
  );
}