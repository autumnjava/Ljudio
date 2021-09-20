import { createContext } from 'react';

type Props = {
  children?: JSX.Element
}

export const PlaylistContext = createContext<any>(null);

export const PlaylistProvider = ({ children }: Props) => {
  

  const values = {

  }

  return (
    <PlaylistContext.Provider value={values}>
       { children }
    </PlaylistContext.Provider>
  );
}