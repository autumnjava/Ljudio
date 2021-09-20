/* eslint-disable no-useless-catch */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user')

module.exports = {
    createUser: async args => {
      try {
        const existingUserEmail = await User.findOne({ email: args.userInput.email});
        const existingUserName = await User.findOne({ username: args.userInput.username});
        if (existingUserEmail || existingUserName) {
          throw new Error('User exists already.');
        }
        const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
  
        const user = new User({
          email: args.userInput.email,
          password: hashedPassword,
          username: args.userInput.username,
        });
        const result = await user.save();
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
            token: token,
            tokenExpiration: 1
        }

    }
  };