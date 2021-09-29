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
  createDjRoom: async (_parent, { playlistId, userId, input }) => {
    let playlistToCopy;
    
    console.log('Im inside create dj room', _parent);
    console.log('Im inside create dj room what is playlist Id', playlistId);
    console.log('Im inside create dj room what is user id', userId);
    console.log('Im inside create dj room what is input', input);

      if (playlistId) {
        playlistToCopy = await Playlist.findOne({ _id: playlistId });
      }

      const playlist = await new Playlist({
        name: '(Dj list) ' + input.name ? input.name : playlistToCopy.name,
        songs: playlistToCopy.songs ? playlistToCopy.songs : []
       });
      await playlist.save();

      console.log('The new playlsit is', playlist);
      
      const djRoom = await new DjRoom({
        name: args.name ? args.name : playlist.name,
        description: args.description,
        isOnline: args.isOnline,
        image: args.imgUrl
      });
      await djRoom.save();

      console.log('the created dj room is', djRoom);

      await Playlist.findOneAndUpdate({ _id: playlist._id }, {
        $set: {
          djRoomId: djRoom._id
        }
      });

      await User.findOneAndUpdate({ _id: userId }, {
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