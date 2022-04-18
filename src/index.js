const log = require('./logger');
const { Server } = require('./server');

const server = new Server();
const ERROR_STARTUP = 1;
server.initialize()
  .start()
  .then(() => log.info('server started'))
  .catch((err) => {
    log.error(err);
    process.exit(ERROR_STARTUP);
  });
