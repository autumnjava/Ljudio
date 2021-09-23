const Playlist = require('../../models/playlist');
const User = require('../../models/user');
const Song = require('../../models/song');

const playlistResolver = {

  createPlaylist: async (args) => {
    
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
  getUserPlaylists: async args => {
    try {
      const myPlaylists = await User.findOne({ _id: args._id }).populate('myPlaylists').exec();
      return myPlaylists;
    } catch (error) {
      throw new Error(error);
    }
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

  removeSongFromPlaylist: async (args) => {
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
};

module.exports = playlistResolver;