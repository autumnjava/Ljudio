import { useState } from "react";
import SearchField from "../../components/searchField/SearchField";
import youtube from './YoutubeApi';
import {
  StyledWrapper,
  StyledSongs,
  StyledSongWrapper,
  StyledSongImg
} from './StyledSearchPage'

const SearchPage = () => {

  const [content, setContent] = useState<any>('');

  const handleSearch = (searchWord: String) => {
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
  
  const printOutYoutubeContent = () => (
    <StyledWrapper>
      {console.log(content)}
      {content.map((song: any, index: number) => (
        <StyledSongWrapper>
          <StyledSongImg src={song.snippet.thumbnails.default.url} alt="" />
          <StyledSongs>{song.snippet.title}</StyledSongs>
        </StyledSongWrapper>
      ))}
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