import { createContext } from 'react';

type Props = {
  children?: JSX.Element
}

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: Props) => {
  

  const values = {

  }

  return (
    <UserContext.Provider value={values}>
       { children }
    </UserContext.Provider>
  );
}