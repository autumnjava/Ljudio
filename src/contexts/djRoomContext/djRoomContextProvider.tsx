import { createContext, useState } from 'react';

type Props = {
  children?: JSX.Element
}

export const DjRoomContext = createContext<any>(null);

export const DjRoomProvider: React.FC<Props> = ({ children }: Props) => {
  
   const values = {
  }

  return (
    <DjRoomContext.Provider value={values}>
       { children }
    </DjRoomContext.Provider>
  );
}