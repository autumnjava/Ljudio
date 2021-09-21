const Playlist = require('../../models/playlist');

const playlistResolver = {
  createPlaylist: async (args) => {
    
    let userPlaylists = [];

    const playlist = await new Playlist({
      name: args.name,
      creator: args.creator
    })
      
    const newPlaylist = playlist.save();
    userPlaylists.push(newPlaylist);
    return userPlaylists
  }  
};

module.exports = playlistResolver;