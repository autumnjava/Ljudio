import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

interface SongProps {
  song: Song
}

type Song = {
  songId: number,
  title: string,
  djRoomId: number
}

const ChangeTitle = (props: SongProps ): JSX.Element => {
  const {
    song
  } = props;

  const CHANGE_SONG_TITLE = gql`
  mutation ChangeSongTitle($input: ChangeSongInput!) {
    changeSongTitle(input: $input) {
      songId
      title
      djRoomId
    }
  }`;
  
  const [changeTitle, { loading, error }] = useMutation(CHANGE_SONG_TITLE);

  const [title, setTitle] = useState(song.title);
  
  if(loading) return <> Loading... </>
  if(error) return <> Error... </>

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          changeTitle({ variables: {input: {songId: song.songId, title}} })
        }}>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button type="submit">
        Change it!
      </button>
      </form>
    </div>
  );
};

export default ChangeTitle;