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
    duration: Number
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

  input songToPlaylistInput {
    song: Song!
    playlist: Playlist!
  }

  type Query {
    getUser(_id: String!): User
    getPlaylists(creator: User!): [Playlist]
    login(args: UserInput!): User!
    getSongsFromPlaylist(_id: String!): [Song]
  }

  type Mutation {
    createUser(args: CreateUserInput): User!
    createPlaylist(args: PlaylistInput): [Playlist!]
    removePlaylist(_id: String!): Boolean!
    logout(): Boolean!
  }

   type Subscription {
    addSongToPlaylist(args: songToPlaylistInput): Playlist!
    removeSongFromPlaylist(args: songToPlaylistInput): Playlist!
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`);

  
 
module.exports = schema;