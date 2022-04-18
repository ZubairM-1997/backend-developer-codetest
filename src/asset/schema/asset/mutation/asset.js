const {
    GraphQLString,
  } = require('graphql');
  const Asset = require('../interface/asset');
  
  module.exports = {
    asset: {
      type: Asset,
      args: {
        name: {
          type: GraphQLString,
        },
        description: {
            type: GraphQLString
        }
      },
    },
  };