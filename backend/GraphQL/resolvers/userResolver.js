const User = require('../../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userResolver = {
    // createUser: async (args) => {
    //     const user = await new User({
    //       email: args.input.email,
    //       password: args.input.password,
    //       username: args.input.username
    //     })
    //   return user.save();
    // }
    createUser: async args => {
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
        });
        const result = await user.save(); // possible we also need to populate() user with Playlist and DjRoom models, gonna check it later
        return { ...result._doc, password: null }; // the response we get back, we want to hide  password!
      } catch (err) {
        throw err;
      }
    },

    login: async ({email, password}) => {
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
    }
  }

module.exports = userResolver;