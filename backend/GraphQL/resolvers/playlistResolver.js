const Playlist = require('../../models/playlist');
const User = require('../../models/user');
const Song = require('../../models/song');

let songs = [
  {
    songId: 1,
    title: "Without me",
    djRoomId: 1,
  },
  {
    songId: 2,
    title: "Freestyler",
    djRoomId: 1,
  },
  {
    songId: 3,
    title: "Rock the mic",
    djRoomId: 2,
  },

]

const playlistResolver = {
  Query: {
    getUserPlaylists: async (_parent, args, __, ___) => {
      try {
        const myPlaylists = await User.findOne({ _id: args._id }).populate('myPlaylists').exec();
        return myPlaylists;
      } catch (error) {
        throw new Error(error);
      }
    },

    getSongsFromPlaylist: async (_parent, args, __, ___) => {
      const songs = await Playlist.findById({ _id: args._id }).populate('songs').exec();
  
      return songs
    },

    songs: () => {
      return songs;
    }
  },

  Mutation: {
    changeSongTitle: (_parent, { input }, __, ___) => {
      const  {songId, title } = input;
      const song = songs.find(song => song.songId === songId);

      pubsub.publish("SONG_TITLE_CHANGED", {
        songTitleChanged: { ...song, title }
      });
      //Return the new song title
      return {
        ...song,
        title
      };

    },



    createPlaylist: async (_parent, args, __, ___) => {
    
      const playlist = new Playlist({
        name: args.name,
      })
  
      await playlist.save();
  
      await User.findOneAndUpdate({
        _id: args.userId
      },
        {
          $push: {
            myPlaylists: {
              _id: playlist._id
            }
          }
        })
  
      return playlist;
    },

    removePlaylist: async (_parent, args, __, ___) => {

      const playlist = await Playlist.findOneAndDelete({ _id: args._id });
      
      await User.updateOne({
        _id: args.userId
      }, {
        $pull: {
          myPlaylists: playlist._id
        }
      })
  
      // filter out playlists with djRoomId's
      // const djPlaylists = await Playlist.find({ djRoomId: { $exists: true } });
  
      // find users who has djRooms & remove djRoomId
        
      // function that finds users with playlist added to users djRooms
      // const users = await User.find({
      //     djRooms: {
      //       $elemMatch: {
      //         _id: args._id
      //       }
      //     }
      //   })
  
      return playlist
    },

    addSongToPlaylist: async (_parent, args, __, ___) => {
      let song = await Song.findOne({ videoId: args.input.videoId });
  
      if (!song) {
        song = new Song({
          title: args.input.title,
          image: args.input.image,
          duration: args.input.duration,
          videoId: args.input.videoId
        })
    
        await song.save();
      }
  
      // song will be added even if it already exists in the playlist
      const playlist = await Playlist.findByIdAndUpdate({
        _id: args._id
      }, {
        $push: {
          songs: {
            _id: song._id
          }
        }
      })
      
      return playlist
    },
  
    removeSongFromPlaylist: async (_parent, args, __, ___) => {
        // will remove all songs with the matching songId 
        const playlist = await Playlist.findByIdAndUpdate({
          _id: args.playlistId
        }, {
          $pull: {
            songs: args.songId
          }
        })
        return playlist
    }
  },

  Subscription: {
    songTitleChanged: {
      subscribe: () => pubsub.asyncIterator(["SONG_TITLE_CHANGED"])
    }
  }
};

module.exports = playlistResolver;