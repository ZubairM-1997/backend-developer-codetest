const test = require('ava');
const { GraphQLClient, gql} = require('graphql-request');
const {
  GraphQLString,
} = require('graphql');
const assetMutation = require('../src/asset/schema/asset/mutation/asset')

test('it should return new asset', async (t) => {
    const mutation = gql`
     mutation ExampleMutation($name: String!, $description: String!) {
        asset(name: $name, description: $description) {
          id 
          name
          description
        }
      }
    `

    const variables = {
        name: 'Harry Potter',
        description: 'Yer a wizard Harry!'
    }

    const url = 'http://localhost:4000/'
    const graphQLClient = new GraphQLClient(url)
    try {
      const data = await graphQLClient.request(mutation, variables)
      t.deepEqual(data.asset.name, 'Harry Potter')
    } catch(error){
      throw error
    }
})

test('it should throw an error that asset already exists', async (t) => {
    const mutation = gql`
     mutation ExampleMutation($name: String!, $description: String!) {
        asset(name: $name, description: $description) {
          id 
          name
          description
        }
      }
    `

    const variables = {
            name: 'Asset Name',
            description: 'Asset 123',     
    }

    const url = 'http://localhost:4000/'
    const graphQLClient = new GraphQLClient(url)
    try {
      const data = await graphQLClient.request(mutation, variables)
    } catch(error){
        t.deepEqual(error.response.errors[0].message, 'Asset already exists')
    }
})

test('Testing Asset Mutation values', (t) => {
  const fields = assetMutation.asset.args
  t.is(fields.name.type, GraphQLString)

  t.is(fields.description.type, GraphQLString)
})

