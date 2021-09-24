
const User = require('../../models/user')
const Playlist = require('../../models/playlist');
const bcrypt = require('bcryptjs');

const userResolver = {
    // createUser: async (args) => {
    //     const user = await new User({
    //       email: args.input.email,
    //       password: args.input.password,
    //       username: args.input.username
    //     })
    //   return user.save();
    // }
  
  getUser: async args => {
    try {
      const user = await User.findOne({ _id: args._id });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  },
    createUser: async args => {
      try {
        if(!args.input.password){
          return;
        }
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
        });
        const result = await user.save(); // possible we also need to populate() user with Playlist and DjRoom models, gonna check it later
        return { ...result._doc, password: null }; // the response we get back, we want to hide  password!
      } catch (err) {
        throw err;
      }
    },

    login: async ({email, password}, req) => {
      // note: req.session is unique per user/browser
      if (req.session.user) {
        throw new Error('Already logged in bro!');
    }

    const user = await User.findOne({email})
      if(!user){
          throw new Error('User does not exist');
      }
      
      const isEqual = await bcrypt.compare(password, user.password);
        if(!isEqual){
            throw new Error('Bad credentials');
        }

        //if we made all the way here, add user to session
        req.session.user = user;

        return {...user._doc, password: null };
    },

    logout: async (args, req) => {
      if (req.session.user) {
        delete req.session.user;
        return true; // success
      }
      else {
        return false; // fail
      }
    },

    whoAmI: async (args, req) => {
      if (req.session.user) {
        let user = { ...req.session.user };
        delete user.password; // remove password in answer
        return user;
      }
      else {
        throw new Error('you are no one');
      }
    }
  }

module.exports = userResolver;