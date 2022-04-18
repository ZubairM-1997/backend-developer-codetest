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

test('should throw an error if a name is not passed', async (t) => {
    const name = undefined;
    const description = "Hello world"
    const ctx = {};
  
    const error = await t.throwsAsync(() => t.context.assetController.write({ name, description, ctx }));
    t.deepEqual(error.message, 'name must be supplied');
});

test('should throw an error if a description is not passed', async (t) => {
    const name = "Harry potter";
    const description = undefined
    const ctx = {};
  
    const error = await t.throwsAsync(() => t.context.assetController.write({ name, description, ctx }));
    t.deepEqual(error.message, 'description must be supplied');
});

test('should throw an error if asset already exists within repository by name', async(t) => {
    const name = 'Asset Name'
    const description = 'Hello world'
    const ctx = {};

    const error = await t.throwsAsync(() => t.context.assetController.write({ name, description, ctx }));
    t.deepEqual(error.message, 'Asset already exists');
})

