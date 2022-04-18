const { ApolloServer } = require('apollo-server');
const typeDefs = require('./asset/schema/asset');
const resolvers = require('./asset/resolvers/asset.gql');
const log = require('./logger');

class Server {
  constructor() {
    this.server = null;
  }
  initialize() {
    this.server = new ApolloServer({ typeDefs, resolvers });
    return this;
  }
  async start() {
    await this
      .server
      .listen()
      .then(({ url }) => {
        log.info(`Server started on ${url}`);
      });
    return this;
  }
}

module.exports = {
  Server,
};
