/* eslint-disable no-param-reassign */
const test = require('ava');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

test.beforeEach((t) => {
  t.context.log = {
    error: sinon.stub(),
  };
  t.context.assetRepository = proxyquire.noCallThru().load(
    './../../../../src/asset/assetRepository.js',
    {
    },
  );
});

test('should return all assets', (t) => {
  const ctx = {};
  const assets = t.context.assetRepository.readAll({ ctx });
  const expectedAssets = [{
    id: '123',
    name: 'Asset Name',
    description: 'Asset 123',
  }];
  t.deepEqual(assets, expectedAssets);
});
