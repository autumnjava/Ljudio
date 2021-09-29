import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from 'react-router';
import {
  StyledSearchField,
  StyledForm
} from './StyledSearchField'

interface props {
  handleYoutubeSearch: (searchWord: string) => void; 
  handleArtistSearch: (searchWord: string) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SearchField = ({handleYoutubeSearch, handleArtistSearch}: props) => {

  const history = useHistory();
  const[searchInput, setSearchInput] = useState<string>('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push('/search')
    handleYoutubeSearch ? handleYoutubeSearch(searchInput) : '';
    handleArtistSearch ? handleArtistSearch(searchInput) : '';
    return;
  }

  return (
    <>
      <StyledForm onSubmit={e => handleSearch(e)}>
        <StyledSearchField onChange={e => setSearchInput(e.target.value)} type="text" placeholder="Search for songs/playlists" />
        <Button type="submit" color="secondary" variant="outlined">SEARCH</Button>
      </StyledForm>  
    </>
  )
}

export default SearchField;