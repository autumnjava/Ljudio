const DjRoom = require('../../models/djRoom');
const User = require('../../models/user');
const Playlist = require('../../models/playlist');

// for subscriptions testing
let songs = [
  {
    songId: 1,
    title: "Without me",
    djRoomId: 1,
  },
  {
    songId: 2,
    title: "Freestyler",
    djRoomId: 1,
  },
  {
    songId: 3,
    title: "Rock the mic",
    djRoomId: 2,
  },
]

const djRoomResolver = {
  Query: {
  songs: () => {
    return songs;
  },
  getOwnersDjRooms: async (_parent, args, __, ___) => {
    try {
      const user = await User.findOne({ _id: args._id }).populate('myPlaylists').exec();
      let djRooms = [];
      for (playlist of user.myPlaylists) {
        const p = await Playlist.findOne({ _id: playlist._id }).populate('djRoomId').exec()
        if (p.djRoomId) {
          djRooms.push(p.djRoomId);
        }
      }
      return djRooms;
    } catch (error) {
      return error;
    }
  },
  getVisitorsDjRoom: async (_parent, args, __, ___) => {
    try {
      const user = await User.findOne({ _id: args._id });
      if (!user.inRoomId) {
        return null;
      }
      const djRoom = await DjRoom.findOne({ _id: user.inRoomId });
      return djRoom;
    } catch (error) {
      return error;
    }
  },
  getActiveDjRooms: async (_parent, args, __, ___) => {
    try {
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
    } catch (error) {
      return error;
    }
  },
  getDjRoom: async (_parent, args, __, ___) => {
    try {
      const djRoom = await DjRoom.findOne({ _id: args._id });
      const playlist = await Playlist.findOne({ djRoomId: djRoom._id });
      const dj = await User.findOne({ myPlaylists: playlist._id });
      const inRoom = await User.find({ inRoomId: djRoom._id });
      let visitors = [];
      for (visitor of inRoom) {
        visitors.push({
          username: visitor.username,
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
    } catch (error) {
      return error;
    }
  },

  },
  Mutation: {
    // changeSongTitle is just for testing.
    changeSongTitle: (_parent, { input }, __, ___) => {
      const  {songId, title } = input; // args
      const song = songs.find(song => song.songId === songId);

      if(!song)
      throw new Error('song not found');

      song.title = title; // update in array also

      pubsub.publish("SONG_TITLE_CHANGED", {
        songTitleChanged: { ...song, title }
      });
      //Return the new song title
      return {
        ...song,
        title
      };

    },
  // createDjRoom: async (_parent, { playlistId, userId, input }) => {
  createDjRoom: async (_parent, args, __, ___) => {
    try {
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
    } catch (error) {
      return error;
    }
  },
  joinDjRoom: async (_parent, args, __, ___) => {
    try {
      await User.findOneAndUpdate({ _id: args._id }, {
        $set: {
          inRoomId: args.djRoomId
        }
      });
     
      const djRoom = await DjRoom.findOne({ _id: args.djRoomId });
      return djRoom;
    } catch (error) {
      return error;
    }
  },
  disjoinDjRoom: async (_parent, args, __, ___) => {
    try {
      await User.findOneAndUpdate({ _id: args._id }, {
        $set: {
          inRoomId: null
        }
      });
      return true;
    } catch (error) {
      return error;
    }
  }, 
  deleteDjRoom: async (_parent, args, __, ___) => {
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
  changeStatusDjRoom: async (_parent, args, __, ___) => {
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
  kickUsers: async (_parent, args, __, ___) => {
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
  changeDjRoomSettings: async (_parent, args, __, ___) => {
    try {
      const djRoom = await DjRoom.findOne({ _id: args._id });
      await DjRoom.findOneAndUpdate({ _id: args._id }, {
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
  },

  Subscription: {
    songTitleChanged: {
      subscribe: () => pubsub.asyncIterator(["SONG_TITLE_CHANGED"])
    }
  }
}

module.exports = djRoomResolver;