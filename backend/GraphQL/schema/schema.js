const { gql } = require('apollo-server-express');


const schema = gql`
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
    name: String!
    songs: [Song]
    djRoomId: DjRoom
  }

  type Song {
    _id: ID!
    title: String
    image: String
    duration: Int
    videoId: String
  }

  type DjRoom {
    _id: ID!
    name: String!
    description: String
    isOnline: Boolean!
    image: String
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
    videoId: String
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input DjRoomInput {
    name: String!
    description: String
    image: String
    isOnline: Boolean!
  }

  type ActiveDjRooms {
    userCount: Int!
    name: String!
    _id: ID!
  }

  type CurrentDjRoom {
    _id: ID!
    djRoom: DjRoom!
    playlist: Playlist!
    dj: User!
    visitors: [User]
    count: Int!
  }
  
  type Query {
    login(email: String!, password: String!): AuthData!
    getUser(_id: String!): User!
    getUserPlaylists(_id: String!): User!
    getSongsFromPlaylist(_id: String!): Playlist
    
    songs: [SongTest!]!
  }

  type SongTest {
    songId: Int!
    title: String!
    djRoomId: Int!
  }

  input ChangeSongInput {
    songId: Int!
    title: String!
    getOwnersDjRooms(_id: String!): [DjRoom]!
    getVisitorsDjRoom(_id: String!): DjRoom
    getActiveDjRooms(input: Boolean): [ActiveDjRooms]
    getDjRoom(_id: String!): CurrentDjRoom
  }

  type Mutation {
    createUser(input: CreateUserInput): User!
    createPlaylist(name: String!, userId: String): Playlist!
    removePlaylist(_id: String!, userId: String): Playlist
    addSongToPlaylist(_id: String!, input: SongInput): Playlist
    removeSongFromPlaylist(index: Int!, playlistId: String!): Playlist 
    changeUsername(_id: String!, newName: String!): User!

    changeSongTitle(input: ChangeSongInput!): SongTest!
    createDjRoom(playlistId: String, userId: String!, input: DjRoomInput): DjRoom!
    joinDjRoom(_id: String!, djRoomId: String!): DjRoom!
    disjoinDjRoom(_id: String!): Boolean
    deleteDjRoom(_id: String!): Boolean
    kickUsers(djRoomId: String!): Boolean
    changeStatusDjRoom(_id: String!, isOnline: Boolean!): Boolean
    changeDjRoomSettings(_id: String!, name: String, description: String, imgUrl: String): Boolean
  }

  type Subscription {
    userCreated: User

    songTitleChanged: SongTest!
  }
`;
  // not sure need this:
// schema {
//   query: Query
//   mutation: Mutation
// }



// type Subscription {
//     addSongToPlaylist(song: Song, playlist: Playlist): Playlist!
//     removeSongFromPlaylist(song: Song, playlist: Playlist): Playlist!
//   }

  
 
module.exports = schema;