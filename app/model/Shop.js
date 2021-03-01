Ext.define('Test.model.Shop', {
    extend: 'Ext.data.Model',
    alias: 'model.Shop',

    fields: [ 
        { name: 'id', type: 'int' },
        { name: 'name' },
        { name: 'descr' },
        { name: 'price', type: 'float' },
        { name: 'quantity', type: 'int' },
    ]
});