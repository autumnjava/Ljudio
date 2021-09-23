const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    _id: ID!
    email: String!
    password: String!
    username: String!
    djRoom: DjRoom
    myPlaylists: [Playlist]
  }

  type Playlist {
    _id: ID!
    name: String
    songs: [Song]
  }

  type Song {
    _id: ID!
    title: String
    image: String
    duration: Int
    videoId: Int
  }

  type DjRoom {
    _id: ID!
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

  input SongInput {
    title: String
    image: String
    duration: Int
    videoId: Int
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
  
  type Query {
    getUser(_id: String!): User
    getPlaylists(creator: String!): [Playlist]
    getSongsFromPlaylist(_id: String!): [Song]
    login(email: String!, password: String!): AuthData!

  }

  type Mutation {
    createUser(input: CreateUserInput): User!
    createPlaylist(name: String!, userId: String): Playlist!
    removePlaylist(_id: String!, userId: String): Playlist
    addSongToPlaylist(_id: String!, input: SongInput): Playlist
    removeSongFromPlaylist(songId: String!, playlistId: String!): Playlist
  }

  
  schema {
    query: Query
    mutation: Mutation
  }
`)

// type Subscription {
//     addSongToPlaylist(song: Song, playlist: Playlist): Playlist!
//     removeSongFromPlaylist(song: Song, playlist: Playlist): Playlist!
//   }

  
 
module.exports = schema;