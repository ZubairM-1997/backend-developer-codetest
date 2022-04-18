const {
  GraphQLInterfaceType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

module.exports = new GraphQLInterfaceType({
  name: 'Asset',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
  },
});
