import { PlaylistProvider } from "../../contexts/playlistsContext/PlaylistContextProvider";
import { UserProvider } from "../../contexts/usersContext/UserContextProvider";
import { DjRoomProvider } from '../../contexts/djRoomContext/djRoomContextProvider';

type Props = {
  children: JSX.Element;
}

const Providers = ({children}: Props) => {
  return (
    <UserProvider>
      <PlaylistProvider>
        <DjRoomProvider>
          {children}
        </DjRoomProvider>
    </PlaylistProvider>
    </UserProvider>
  )
}

export default Providers;