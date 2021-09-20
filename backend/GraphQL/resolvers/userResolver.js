const User = require('../../models/user')

const userResolver = {
  Query: {
    // getUser
  },
  
  Mutation: {
    createUser: async (args) => {
      const user = new User({
        email: args.userInput.email,
        password: args.userInput.password,
        username: args.userInput.username
      })
  
      const result = await user.save();
      console.log(result);
    }
  }

};

module.exports = userResolver;