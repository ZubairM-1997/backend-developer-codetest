const test = require('ava');
const { 
    info,
    error,
    warn,
    debug } = require('../src/logger');

test('Should log out info', (t) => {
    const message = 'Hello world'
    t.snapshot(info(message), 'Hello world')
})

test('Should log out error', (t) => {
    const message = 'An error occurred'
    t.snapshot(error(message), 'An error occurred')
})

test('Should log out warning', (t) => {
    const message = 'Something could go wrong here'
    t.snapshot(warn(message), 'Something could go wrong here')
})

test('Should log out debug', (t) => {
    const message = 'Debug message here'
    t.snapshot(warn(message), 'Debug message here')
})


