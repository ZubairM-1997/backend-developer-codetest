const {
  GraphQLID,
} = require('graphql');
const Asset = require('../interface/asset');

module.exports = {
  asset: {
    type: Asset,
    args: {
      id: {
        type: GraphQLID,
      },
    },
  },
};
