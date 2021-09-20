const Playlist = require('../../models/playlist');

const playlistResolver = {

  Query: {
    // getPlaylist
  },

  Mutation: {
    createPlaylist: async (args, req) => {
      const playlist = new Playlist({
        name: args.name,
        // creator: req.userId
      })

      const result = await playlist.save();
      console.log(result)
    }
  }

  
};

module.exports = playlistResolver;