const test = require('ava');
const {
    GraphQLNonNull,
    GraphQLScalarType

} = require('graphql');
const basicAssetType = require('../../../src/asset/schema/asset/type/basicAsset');

test('Testing basicAsset type', (t) => {
    let basicAssetFields = basicAssetType.getFields()
    t.deepEqual(basicAssetFields.id.name, 'id')

    t.deepEqual(basicAssetFields.description.name, 'description')

    t.deepEqual(basicAssetFields.name.name, 'name')
})