# code-test
Simple graphql micro-service

## Overview

- This is a simple micro-service that has a graphql api
- The graphql schema contains an interface named Asset and a concrete type that implements that interface named BasicAsset
- A query allows us to read an asset by id

To get started, first install the dependancies by entering 'yarn install' on the terminal

## Linting

yarn lint

## Testing

to run all tests
- yarn test

to run tests with a watch

- yarn test:watch

## Coverage

to generate a code coverage report run

- yarn coverage

look in the coverage folder in the root of the project and open index.html in a browser to see your coverage report 

## Running the service

yarn start

navigate to http://localhost:4000 and use the graphql web test tool to try out the full stack service

## Objective of the Test

- Using Test Driven Development (TDD)
  - Remember RED, GREEN, REFACTOR
  - Attempt as many of the following tasks as you can in any order 

### Tasks
- There are some broken tests, can you fix them?
- We would like to throw an error when an asset query asks for an asset that does not exist in the repository, at the moment it just returns a null
- Improve the coverage of the assetRepository module
  - you can use "yarn coverage" to generate the report

### Bonus Tasks
- We would like to implement a graphql mutation to add an asset to the repository
- We would like to introduce a new type of Asset named ComplexAsset that has a field not present in the BasicAsset, named status
 
