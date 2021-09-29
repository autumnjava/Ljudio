import Button from '@mui/material/Button';
import { useState } from 'react';
import {
  StyledSearchField,
  StyledForm
} from './StyledSearchField'

interface props {
  handleYoutubeSearch?: (searchWord: string) => void
}

const SearchField = ({handleYoutubeSearch}: props) => {

  const[searchInput, setSearchInput] = useState<string>('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleYoutubeSearch ? handleYoutubeSearch(searchInput) : '';
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