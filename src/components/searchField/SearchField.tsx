import Button from '@mui/material/Button';
import {
  StyledSearchField,
  StyledForm
} from './StyledSearchField'

const SearchField = () => {

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <>
      <StyledForm onSubmit={e => handleSearch(e)}>
        <StyledSearchField type="text" placeholder="Search for songs/playlists" />
        <Button type="submit" color="secondary" variant="outlined">SEARCH</Button>
      </StyledForm>  
    </>
  )
}

export default SearchField;