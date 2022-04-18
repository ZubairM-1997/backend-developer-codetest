const assetRepository = require('./assetRepository');
const log = require('../logger');

const read = async ({ ctx, id }) => {
  // TODO should be checking that ctx is not null or undefined
  if (!id) {
    log.error('id must be supplied');
    throw new Error('id must be supplied');
  }

  if (!ctx) {
    log.error('id must be supplied');
    throw new Error('ctx must be supplied');
  }
  const found = assetRepository.readAll({ ctx }).find(asset => asset.id === id);

  if (!found) {
    throw new Error('asset does not exist in the repository')
  }

  return found;
};

const write = async ({ name, description, ctx}) => {
  if (!name) {
    log.error('name must be supplied')
    throw new Error('name must be supplied')
  }

  if (!description) {
    log.error('description must be supplied')
    throw new Error('description must be supplied')
  }

  const found = assetRepository.readAll({ctx}).find(asset => asset.name === name)
  console.log(found)

  if (found) {
    log.error('Asset already exists')
    throw new Error('Asset already exists')
  }

  const newAsset = {
    id: `${Math.floor(Math.random() * 200)}`,
    name,
    description
  }
  return newAsset

}

module.exports = {
  read,
  write
};
