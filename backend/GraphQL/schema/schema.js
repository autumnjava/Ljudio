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
    artist: [String]
    title: String
    album: String
    duration: Int
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

  type Query {
    getUser(_id: String!): User
    getPlaylists(creator: String!): [Playlist]
    login(input: UserInput!): [User!]
    getSongsFromPlaylist(_id: String!): [Song]
  }

  type Mutation {
    createUser(input: CreateUserInput): User!
    createPlaylist(name: String!, userId: String): Playlist!
    removePlaylist(_id: String!, userId: String): Playlist
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