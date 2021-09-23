const Playlist = require('../../models/playlist');
const User = require('../../models/user');

const playlistResolver = {

  createPlaylist: async (args) => {
    
    const playlist = new Playlist({
      name: args.name,
      songs: []
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
  getUserPlaylists: async args => {
    try {
      const myPlaylists = await User.findOne({ _id: args._id }).populate('myPlaylists').exec();
      return myPlaylists;
    } catch (error) {
      throw new Error(error);
    }
  },
  
};

module.exports = playlistResolver;