import DialogTitle from '@mui/material/DialogTitle';
import { Dialog } from "@mui/material";
import {StyledList, StyledListItem} from './StyledDialog'

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  playlists: {
    name: string,
    id: string
  }[]
}

const DialogModal = ({ open, setOpen, playlists}: Props) => {
  return (
    <Dialog onClose={() => setOpen(false)} open={open} >
      <DialogTitle style={{borderBottom: '1px solid black'}}>Choose a playlists</DialogTitle>
      <StyledList>
        {playlists.map(playlist => (
          <StyledListItem key={playlist.id}>
            {playlist.name}
          </StyledListItem>
        ))}
      </StyledList>
    </Dialog>
  )
}

export default DialogModal; 