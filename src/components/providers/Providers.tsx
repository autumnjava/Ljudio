import { PlaylistProvider } from "../../contexts/playlistsContext/PlaylistContextProvider";
import { UserProvider } from "../../contexts/usersContext/UserContextProvider";

type Props = {
  children: JSX.Element;
}

const Providers = ({children}: Props) => {
  return (
    <UserProvider>
    <PlaylistProvider>
      {children}
    </PlaylistProvider>
    </UserProvider>
  )
}

export default Providers;