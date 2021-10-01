const Playlist = require('../../models/playlist');
const User = require('../../models/user');
const Song = require('../../models/song');

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
  },

  Mutation: {
    createPlaylist: async (_parent, args, __, ___) => {
      try {
        const playlist = new Playlist({ name: args.name, djRoomId: null })
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
      } catch (error) {
        throw new Error(error);
      }
    },
    removePlaylist: async (_parent, args, __, ___) => {
      try {
        const playlist = await Playlist.findOneAndDelete({ _id: args._id });
        
        await User.updateOne({
          _id: args.userId
        }, {
          $pull: {
            myPlaylists: playlist._id
          }
        })
        return playlist
      } catch (error) {
        throw new Error(error);
      }
    },
    addSongToPlaylist: async (_parent, args, __, ___) => {
      try {
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

        const playlist = await Playlist.findByIdAndUpdate({
          _id: args._id
        }, {
          $addToSet: {
            songs: {
              _id: song._id
            }
          }
        })
        return playlist
      } catch (error) {
        throw new Error(error)
      }
    },
    removeSongFromPlaylist: async (_parent, args, __, ___) => {
      try {
        const playlist = await Playlist.findById({ _id: args.playlistId });
        await playlist.songs.splice(args.index, 1);
        await Playlist.findOneAndUpdate({ _id: playlist._id }, {
        $set: {
          songs: playlist.songs
        }
      }).populate('songs').exec();
        return playlist
      } catch (error) {
        throw new Error(error)
      }
    }
  },
 
};

module.exports = playlistResolver;