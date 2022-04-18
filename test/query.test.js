const test = require('ava');
const { request, gql} = require('graphql-request');
const {
  GraphQLID,
} = require('graphql');
const assetQuery = require('../src/asset/schema/asset/query/asset')

test('it should return error message', async (t) => {
    const query = gql`
     query ExampleQuery {
        asset(id: 12) {
          id 
          name
          description
        }
      }
    `

    const url = 'http://localhost:4000/'
    try {
      const data = await request(url, query)
    } catch(error){
      t.deepEqual(error.response.errors[0].message, 'asset does not exist in the repository')
    }
})

test('should return asset in the response', async(t) => {
  const query = gql`
  query ExampleQuery {
    asset(id: 123) {
      id 
      name
      description
    }
  }
  `

  const repository = 
    {
      id: '123',
      name: 'Asset Name',
      description: 'Asset 123',
    };

  const url = 'http://localhost:4000/'
  try {
    const data = await request(url, query)
    t.deepEqual(data.asset, repository )
  } catch(error){
    throw error
  }
})

test('Testing Asset Mutation values', (t) => {
  const fields = assetQuery.asset.args
  t.is(fields.id.type, GraphQLID)
})