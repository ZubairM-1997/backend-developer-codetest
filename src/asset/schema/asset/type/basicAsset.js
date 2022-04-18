const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');
const Asset = require('../interface/asset');

module.exports = new GraphQLObjectType({
  name: 'BasicAsset',
  interfaces: [Asset],
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
  }),
});
