const test = require('ava');
const assetInterface = require('../../../src/asset/schema/asset/interface/asset');

test('Testing asset type', (t) => {
    let assetInterfaceFields = assetInterface.getFields()
    t.deepEqual(assetInterfaceFields.id.name, 'id')

    t.deepEqual(assetInterfaceFields.description.name, 'description')

    t.deepEqual(assetInterfaceFields.name.name, 'name')
})