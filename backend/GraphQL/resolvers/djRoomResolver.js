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
    const dj = await User.findOne({ myPlaylists: playlist._id });
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
      name: args.input.name ? args.input.name : playlistToCopy.name,
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
  disjoinDjRoom: async (args, __, ___) => {
    await User.findOneAndUpdate({ _id: args._id }, {
      $set: {
        inRoomId: null
      }
    });
    return true;
  }, 
  deleteDjRoom: async (args, __, ___) => {
    try {
      await DjRoom.deleteOne({ _id: args._id });
      const playlist = await Playlist.findOne({ djRoomId: args._id });
      await Playlist.deleteOne({ djRoomId: args._id });
      const user = await User.findOne({ myPlaylists: playlist._id });
      await User.updateOne(
        { _id: user._id },
        {
          $pull:
          {
            myPlaylists: playlist._id
          }
        });
    } catch (error) {
      return error;
    }
    return true;
    },
  changeStatusDjRoom: async (args, __, ___) => {
    try {
      await DjRoom.findOneAndUpdate({ _id: args._id }, {
        $set: {
          isOnline: args.isOnline
        }
      });
    } catch (error) {
      return error;
    }
    return true;
    },
  kickUsers: async (args, __, ___) => {
    try {
      await User.updateMany({ inRoomId: args.djRoomId }, {
        $set: {
          inRoomId: null
        }
      });
    } catch (error) {
      return error;
    }
    return true;
    },
  changeDjRoomSettings: async (args) => {
    try {
      const djRoom = await DjRoom.findOne({ _id: args._id });
      const updatedDjRoom = await DjRoom.findOneAndUpdate({ _id: args._id }, {
        $set: {
          name: args.name ? args.name : djRoom.name,
          description: args.description ? args.description : djRoom.description,
          image: args.imgUrl ? args.imgUrl : djRoom.image
        }
      });
      return true;
    } catch (error) {
      return error;
      }
    }
  }
// }

module.exports = djRoomResolver;