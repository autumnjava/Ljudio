const User = require('../../models/user')
const pubSub = require('./pubSubHelper');
const NEW_USER_EVENT = 'NEW_USER_EVENT';

const userResolver = {
  createUser: async (args) => {
    
      const user = await new User({
        email: args.input.email,
        password: args.input.password,
        username: args.input.username
      });
    
      pubSub.publish(NEW_USER_EVENT, { newUser: { ...args.input.email } });
        return user.save();
  },
    newUser: {
      subscribe: (parent, args, context) => {
        console.log('Inside subscribe in user resolver');
        pubSub.asyncIterator(NEW_USER_EVENT)
      }
    }
  }

module.exports = userResolver;