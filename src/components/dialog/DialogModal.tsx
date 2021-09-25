import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Dialog } from "@mui/material";

interface Props {
  open: boolean,
  setOpen: (state: boolean) => void
  playlists: {
    id: string,
    name: string,
  }[]
}

const DialogModal = ({setOpen, open, playlists}: Props) => {
  return (
    <Dialog onClose={() => setOpen(false)} open={open}>
      <DialogTitle>Playlists</DialogTitle>
      <List sx={{ pt: 0 }}>
        {playlists.map(playlist => (
          <ListItem key={playlist.id}>
            {playlist.name}
        </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default Dialog; 