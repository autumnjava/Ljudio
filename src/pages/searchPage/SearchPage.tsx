import { useState } from "react";
import SearchField from "../../components/searchField/SearchField";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import youtube from './YoutubeApi';
import {
  StyledWrapper,
  StyledSongs,
  StyledSongWrapper,
  StyledSongImg
} from './StyledSearchPage'

const SearchPage = () => {

  const [content, setContent] = useState<any>('');
  const [amountOfSearchResult, setAmountOfSearchResult] = useState(2);
  const [showMore, setShowMore] = useState(false);

  const handleSearch = (searchWord: string) => {
    youtube.get('/search', {
      params: {
        q: searchWord
      }
    })
      .then(res => {
        const data = res.data.items;
        setContent(data);
      })
  }

  const handleSearchResult = () => {
    !showMore ? setAmountOfSearchResult(content.length) : setAmountOfSearchResult(2);
    setShowMore(!showMore);
  }

  const handleAddToPlaylist = (song: any) => {
    // function to add song to playlist..
  }
  
  const printOutYoutubeContent = () => (
    <StyledWrapper>
      {content.map((song: any, index: number) => (
        <>
          {index <= amountOfSearchResult && <StyledSongWrapper>
            <StyledSongImg src={song.snippet.thumbnails.default.url} alt="" />
            <StyledSongs>{song.snippet.title}</StyledSongs>
            <PlaylistAddIcon onClick={() => handleAddToPlaylist(song)} style={{alignSelf: 'center'}}/>
          </StyledSongWrapper>}
        </>  
      ))}
      {!showMore ? <ExpandMoreIcon onClick={handleSearchResult} fontSize="large" style={{ display: 'block', margin: '1rem auto' }} />
      : <ExpandLessIcon onClick={handleSearchResult} fontSize="large" style={{ display: 'block', margin: '1rem auto' }}/>}
    </StyledWrapper>
  )

  return (
    <>
      <SearchField handleYoutubeSearch={handleSearch} />
      {content && printOutYoutubeContent()}
    </>
  )
}

export default SearchPage;