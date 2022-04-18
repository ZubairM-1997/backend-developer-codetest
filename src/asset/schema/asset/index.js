const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql');

const BasicAsset = require('./type/basicAsset');
const asset = require('./query/asset');
const assetMutation = require('./mutation/asset')

module.exports = new GraphQLSchema({
  types: [
    BasicAsset,
  ],
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      ...assetMutation
    },
  }),
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...asset,
    },
  }),
  /*
  subscription: new GraphQLObjectType({
    name: 'Subscription',
    fields: {
    },
  }),
   */
});
