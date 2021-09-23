const Playlist = require('../../models/playlist');
const User = require('../../models/user');
const Song = require('../../models/song');

const playlistResolver = {
  createPlaylist: async (args) => {
    
    const playlist = new Playlist({
      name: args.name,
    })

    const savedPlaylist = await playlist.save();

    await User.findOneAndUpdate({
      _id: args.userId
    },
      {
        $push: {
          myPlaylists: {
            _id: savedPlaylist._id
          }
        }
      })

    return await playlist;
  },

  removePlaylist: async (args) => {

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

  addSongToPlaylist: async (args) => {
    let song = await Song.findOne({ videoId: args.input.videoId });

    if (!song) {
      song = new Song({
        artist: args.input.artist,
        title: args.input.title,
        album: args.input.album,
        duration: args.input.duration,
        videoId: args.input.videoId
      })
  
      await song.save();
    }

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
  }
};

module.exports = playlistResolver;