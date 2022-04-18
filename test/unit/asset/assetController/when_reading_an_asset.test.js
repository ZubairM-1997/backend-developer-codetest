/* eslint-disable no-param-reassign */
const test = require('ava');
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const { expect } = require('chai')

test.beforeEach((t) => {
  t.context.log = {
    error: sinon.stub(),
  };
  t.context.assetRepository = {
    readAll: sinon.stub().returns([]),
  };
  t.context.assetController = proxyquire.noCallThru().load(
    './../../../../src/asset/assetController.js',
    {
      './../logger': t.context.log,
      './assetRepository': t.context.assetRepository,
    },
  );
});

test('should throw an error if a id is not passed', async (t) => {
  const id = undefined;
  const ctx = {};

  const error = await t.throwsAsync(() => t.context.assetController.read({ ctx, id }));
  t.deepEqual(error.message, 'id must be supplied');
});

test('should throw an error if a ctx is not passed', async (t) => {
  const id = '2123';
  const ctx = undefined;
  // TODO add the assertion
  const error = await t.throwsAsync(() => t.context.assetController.read({ ctx, id }));
  t.deepEqual(error.message, 'ctx must be supplied');

});

test('should ask repo for asset by id', async (t) => {
  const id = '2123';
  const ctx = {};
  t.context.assetRepository.readAll.returns([]);
  await t.context.assetController.read({ ctx, id });
  expect(t.context.assetRepository.readAll.called).to.equal(true);
});

test('should return asset if asset exists in repo', async (t) => {
  const id = '2123';
  const ctx = {};
  t.context.assetRepository.readAll.returns([{
    id: '2123',
    name: 'Asset Name',
  }]);
  const asset = await t.context.assetController.read({ ctx, id });
  t.deepEqual(asset, {
    id: '2123',
    name: 'Asset Name',
  });
});

test('should throw error if asset does NOT exist in repo', async (t) => {
  const id = '2123';
  const ctx = {};
  t.context.assetRepository.readAll.returns([{
    id: '9999',
    name: 'Another Asset Name',
  }]);
  const error = await t.throwsAsync(() => t.context.assetController.read({ ctx, id }));
  t.deepEqual(error.message, 'asset does not exist in the repository');
});


