import { useState } from "react";
import SearchField from "../../components/searchField/SearchField";

const SearchPage = () => {

  const [searchInputYoutube, setSearchInputYoutube] = useState<string>('');

  return (
    <>
      <SearchField setSearchInputYoutube={setSearchInputYoutube} />
    </>
  )
}

export default SearchPage;