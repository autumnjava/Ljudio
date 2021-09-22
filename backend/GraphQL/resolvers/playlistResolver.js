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

    // await User.aggregate([{ $unwind: "$myPlaylists" }]);

    // const users = await User.findOne({
    //   _id: args.userId
    // },
    //   {
    //     myPlaylists: {
    //       $elemMatch: {
    //         _id: args._id
    //       }
    //     }
    //   })

    return playlist
  },

  addSongToPlaylist: async (args) => {
    const song = new Song({
      artist: args.input.artist,
      title: args.input.title,
      album: args.input.album,
      duration: args.input.duration
    })

    await song.save();

    const playlist = Playlist.findByIdAndUpdate({
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