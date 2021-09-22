import { PlaylistProvider } from "../../contexts/playlistsContext/PlaylistContextProvider";

type Props = {
  children: JSX.Element;
}

const Providers = ({children}: Props) => {
  return (
    <PlaylistProvider>
      {children}
    </PlaylistProvider>
  )
}

export default Providers;