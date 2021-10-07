import { useParams, useHistory } from "react-router";
import { useState, useContext, useEffect } from "react";
import { PlaylistContext } from "../../contexts/playlistsContext/PlaylistContextProvider";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import DialogModal from '../../components/dialog/DialogModal';
import SnackBar from '../../components/snackBar/SnackBar'

import {
  StyledWrapper,
  StyledTitle,
  StyledNameDiv,
  StyledName,
  StyledMusicDiv,
  StyledSongWrapper,
  StyledSongs,
  StyledSongImg,
  StyledCategory,
  StyledTest,
  StyledImg,
  StyledAllContent,
  StyledShareIcon,
  StyledBackIcon
} from "./StyledArtistPage";

interface SongProps {
  title: string,
  videoId: string,
  duration: number,
  imgUrl: string
}

interface Playlist{
  name: string;
  _id: string;
}

const ArtistPage = () => {

  const { id }: any = useParams();
  const { currentSong, setCurrentSong, addSongToPlaylist, getAllUserPlaylists, allUserPlaylists, handleSearch, content, handleArtistSearch, artistContent } = useContext(PlaylistContext);
  const [open, setOpen] = useState(false);
  const [songToAdd, setSongToAdd] = useState<SongProps | null>();
  const [showMore, setShowMore] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const history = useHistory();
  

  useEffect(() => {
    if (!artistContent) {
      handleArtistSearch(id);
      handleSearch(id);
    }
  }, []);
  
   const handleSong = (song: SongProps) => {
    setCurrentSong([song]);
  }

  const handleQue = (song: SongProps) => {
    setCurrentSong([...currentSong, song])
  }

  const handleAddToPlaylist = (song: SongProps, playlist: Playlist) => {
    addSongToPlaylist(playlist._id, song);
  }

  const handleOpenDialog = (song: SongProps, playlist: Playlist) => {
    setOpen(!open)
    setSongToAdd(song);
  }

  const handleCopy = (id: string) => {
  const el = document.createElement("input");
    el.value = `https://www.youtube.com/channel/${id}`;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setOpenSnackBar(true);
}

  return (
    <StyledWrapper>
      {openSnackBar && <SnackBar
        snackbarContent="Copied"
        open={openSnackBar}
        setOpen={setOpenSnackBar}
      />}
      <StyledAllContent>
      <StyledNameDiv>
      
      <StyledTitle>ARTIST<CheckCircleRoundedIcon
          fontSize='small'
          style={{color: 'white', position: 'relative', top: '3px', marginLeft: '3px'}}
          />
            <StyledShareIcon onClick={() => handleCopy(artistContent.browseId)}/>
            <StyledBackIcon onClick={() => history.push('/search')}/>
          </StyledTitle>
        <StyledName>{artistContent && artistContent.name.toUpperCase()}</StyledName>
          {artistContent && <StyledImg src={artistContent.thumbnails[1].url} />}
      </StyledNameDiv>
      
      <StyledMusicDiv>
        <StyledCategory>Music</StyledCategory>
        {content && content.map((song: SongProps, index: number) => (
          <StyledTest key={index}>
            {index && song.videoId !== undefined ? <StyledSongWrapper>
              <StyledSongImg onClick={() => handleSong(song)} src={song.imgUrl} alt="" />
              <StyledSongs onClick={() => handleSong(song)}>{song.title}</StyledSongs>
              <PlaylistAddIcon onClick={() => handleOpenDialog(song, allUserPlaylists)} style={{ alignSelf: 'center' }} />
              <PlaylistPlayIcon onClick={() => handleQue(song)} style={{ alignSelf: 'center' }} />
            </StyledSongWrapper> : ''}
          </StyledTest>
        ))}
        {songToAdd && <DialogModal
        open={open}
        setOpen={setOpen}
        playlists={allUserPlaylists}
        song={songToAdd}
        handleAddToPlaylist={handleAddToPlaylist}
      />}
        </StyledMusicDiv>
        </StyledAllContent>
    </StyledWrapper>
  );

}

export default ArtistPage;