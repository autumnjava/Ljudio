const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    email: String!
    password: String!
    username: String!
    djRoom: DjRoom
    myPlaylists: Playlist
  }

  type Playlist {
    name: String
    songs: Song
    creator: User
  }

  type Song {
    artist: [String]
    title: String
    album: String
    duration: Int
  }

  type DjRoom {
    name: String
    description: String
    isOnline: Boolean
    owner: User!
  }

  input UserInput {
    email: String!
    password: String!
  }

  input CreateUserInput {
    email: String!
    password: String!
    username: String!
  }

  input PlaylistInput {
    name: String!
    creator: User!
  }

  input SongToPlaylistInput {
    song: Song!
    playlist: Playlist!
  }

  type Query {
    getUser(_id: String!): User
    getPlaylists(creator: User!): [Playlist]
    login(userInput: UserInput!): User!
    getSongsFromPlaylist(_id: String!): [Song]
  }

  type Mutation {
    createUser(createUserInput: CreateUserInput): User!
    createPlaylist(playlistInput: PlaylistInput): [Playlist!]
    removePlaylist(_id: String!): Boolean!
   
  }

   type Subscription {
    addSongToPlaylist(songToPlaylistInput: SongToPlaylistInput): Playlist!
    removeSongFromPlaylist(songToPlaylistInput: SongToPlaylistInput): Playlist!
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`)

//  logout(): Boolean!
  
 
module.exports = schema;