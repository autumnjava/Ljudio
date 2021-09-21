const User = require('../../models/user')

const userResolver = {
    createUser: async (args) => {
        const user = await new User({
          email: args.input.email,
          password: args.input.password,
          username: args.input.username
        })
      return user.save();
    }
  }

module.exports = userResolver;