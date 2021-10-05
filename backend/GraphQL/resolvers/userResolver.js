const User = require('../../models/user')
const Playlist = require('../../models/playlist');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userResolver = {
  Query: {
    login: async (_parent, {email, password}, __, ___) => {
      const errorMsg='Bad credentials'
        const user = await User.findOne({email})
        if(!user){
            throw new Error(errorMsg);
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if(!isEqual){
            throw new Error(errorMsg);
        }

        const token = jwt.sign({userId: user.id, email: user.email}, process.env.TOKEN_KEY, {expiresIn: '1h'})
        
        return {
            userId: user.id,
            token,
            tokenExpiration: 1
        }
    },

    getUser: async (_parent, args, __, ___) => {
      try {
        const user = await User.findOne({ _id: args._id });
        return user;
      } catch (error) { throw new Error(error); }
    },

  },

  Mutation: {
    changeUsername: async (_parent, args, __, ___) => {
      console.log('what is args change username', args);
      try {
        await User.updateOne(
          { _id: args._id },
          {
            $set:
              { username: args.newName }
          });
        // Response from Update One is not User, therefore a findOne must be done
        const user = await User.findOne({ _id: args._id });
        return user;
      } catch (error) {
        throw new Error(error)
      }
    },

    createUser: async (_parent, args, __, ___) => {
      try {
        const existingUserEmail = await User.findOne({ email: args.input.email});
        const existingUserName = await User.findOne({ username: args.input.username});
        if (existingUserEmail || existingUserName) {
          throw new Error('User exists already.');
        }
        const hashedPassword = await bcrypt.hash(args.input.password, 12);
  
        const user = new User({
          email: args.input.email,
          password: hashedPassword,
          username: args.input.username,
          inRoomId: null
        });

        pubsub.publish('USER_CREATED', {userCreated: user});

        const result = await user.save(); // possible we also need to populate() user with Playlist and DjRoom models, gonna check it later
        
        return { ...result._doc, password: null }; // the response we get back, we want to hide  password!
      } catch (err) {
        throw err;
      }
    },

  },

  Subscription: {
    userCreated: {
      subscribe: () => pubsub.asyncIterator(['USER_CREATED']),
    },
  }
  }

module.exports = userResolver;