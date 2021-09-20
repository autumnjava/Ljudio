import Button from '@mui/material/Button';
import { useState } from 'react';
import {
  StyledSearchField,
  StyledForm
} from './StyledSearchField'

interface props {
  handleYoutubeSearch: (searchWord: String) => void
}

const SearchField = ({handleYoutubeSearch}: props) => {

  const[searchInput, setSearchInput] = useState<String>('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleYoutubeSearch(searchInput);
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