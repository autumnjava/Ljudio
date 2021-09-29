const DjRoom = require('../../models/djRoom');
const User = require('../../models/user');
const Playlist = require('../../models/playlist');

const djRoomResolver = {
  // Query: {
  //   getOwnersDjRoom: async (_parent, {_id}) => {
  //     const user = User.findOne({ _id: _id }).populate('inRoomId');
  //     return user.inRoomId;
  //   },
  //   getVisitorsDjRoom: async (_parent, { _id }) => {
      
  //   },
  //   getActiveDjRooms: async (_parent, { }) => {
      
  //   }

  // },
  // Mutation: {
  // createDjRoom: async (_parent, { playlistId, userId, input }) => {
    createDjRoom: async (args, __, ___) => {
    let playlistToCopy;

      if (args.playlistId) {
        playlistToCopy = await Playlist.findOne({ _id: args.playlistId });
      }

      const playlist = await new Playlist({
        name: `(Dj list) ${(args.input.name ? args.input.name : playlistToCopy.name)}`,
        songs: !playlistToCopy ? [] : playlistToCopy.songs
       });
      await playlist.save();
      
      const djRoom = await new DjRoom({
        name: args.input.name ? args.input.name : playlist.name,
        description: args.input.description,
        isOnline: args.input.isOnline,
        image: args.input.imgUrl
      });
      await djRoom.save();

      await Playlist.findOneAndUpdate({ _id: playlist._id }, {
        $set: {
          djRoomId: djRoom._id
        }
      });

      await User.findOneAndUpdate({ _id: args.userId }, {
        $push: {
          myPlaylists: {
            _id: playlist._id
          } 
        }
      })

      return djRoom;
    },
    deleteDjRoom: async (_parent, { }) => {
      
    },
    changeStatusDjRoom: async (_parent, { }) => {
      
    },

  }
// }

module.exports = djRoomResolver;