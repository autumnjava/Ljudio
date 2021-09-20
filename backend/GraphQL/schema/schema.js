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
    owner: User
  }

  type Query {
    getUser(_id: String!): User
  }
`)

module.exports = schema;