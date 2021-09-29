import { createContext } from "react";

interface Props {
children?: JSX.Element
}

export const MusicPlayerContext = createContext<any | null>(null);

export const MusicPlayerProvider = ({ children }: Props) => {


const values = {
  
}
  
  return (
    <MusicPlayerContext.Provider value={values}>
      {children}
    </MusicPlayerContext.Provider>
  );

}