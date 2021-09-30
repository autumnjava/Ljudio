const DjRoom = require('../../models/djRoom');
const User = require('../../models/user');
const Playlist = require('../../models/playlist');

const djRoomResolver = {
  // Query: {
    getOwnersDjRooms: async (args, __, ___) => {
    const user = await User.findOne({ _id: args._id }).populate('myPlaylists').exec();
    let djRooms = [];
    for (playlist of user.myPlaylists) {
      const p = await Playlist.findOne({ _id: playlist._id }).populate('djRoomId').exec()
      if (p.djRoomId) {
        djRooms.push(p.djRoomId);
      }
    }
    return djRooms;
    },
    getVisitorsDjRoom: async (args, __, ___) => {
      const user = await User.findOne({ _id: args._id });
      if (!user.inRoomId) {
        return null;
      }
      const djRoom = await DjRoom.findOne({ _id: user.inRoomId });
      return djRoom;
    },
    getActiveDjRooms: async (args, __, ___) => {
      const djRooms = await DjRoom.find({ isOnline: true });
      const activeDjRooms = [];
      for (let i = 0; i < djRooms.length; i++) {
        let userCount = await User.find({ inRoomId: djRooms[i]._id }).count();
        activeDjRooms.push({
          userCount: userCount,
          name: djRooms[i].name,
          _id: djRooms[i]._id
        });
      }
      return activeDjRooms;
    },
    getDjRoom: async (args, __, ___) => {
      const djRoom = await DjRoom.findOne({ _id: args._id });
      const playlist = await Playlist.findOne({ djRoomId: djRoom._id });
      const dj = await User.findOne({myPlaylists: playlist._id});
      const inRoom = await User.find({ inRoomId: djRoom._id });
      let visitors = [];
      for (visitor of inRoom) {
        visitors.push({
          name: visitor.username,
          _id: visitor._id
        });
      }
      return {
        _id: djRoom._id,
        djRoom,
        playlist,
        dj,
        visitors,
        count: visitors.length
      }
    
  },
    

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
    joinDjRoom: async (args, __, ___) => {
      await User.findOneAndUpdate({ _id: args._id }, {
        $set: {
          inRoomId: args.djRoomId
        }
      });
   
      const djRoom = await DjRoom.findOne({ _id: args.djRoomId });
      return djRoom;
    },
    disjoinDjRoom: async(args, __, ___) => {
      await User.findOneAndUpdate({ _id: args._id }, {
        $set: {
          inRoomId: null
        }
      });
      return true;
    },
    
    deleteDjRoom: async (_parent, { }) => {
      
    },
    changeStatusDjRoom: async (_parent, { }) => {
      // check if user already has a online dj room, and in that case close the dj room and open the other
  },
  kickUsers: async () => {
      
    }

  }
// }

module.exports = djRoomResolver;