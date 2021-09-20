const User = require('../../models/user')

const user = {
  // createUser
  createUser: async (args) => {
    const user = new User({
      email: args.userInput.email,
      password: args.userInput.password,
      username: args.userInput.username
    })

    const result = await user.save();
    console.log(result);
  }
  
  // get a user
};

module.exports = user;