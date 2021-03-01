Ext.define('Test.store.Shop', {
    
    extend: 'Ext.data.Store',
    storeId: 'myStore',
    alias: 'store.Shop',
    model: 'Test.model.Shop',

    autoLoad: true,
    autoSync: true,
    pageSize: 4, 

    data: 
        [
            { "id": 1, "name": "Notebook Lenovo", "descr": "Ноутбук Think Pad T460", "price": "100", "quantity": "2" },
            { "id": 2, "name": "Keyboard OKLICK", "descr": "Клавиатура OKLICK 140M", "price": "50", "quantity": "8" },
            { "id": 3, "name": "Network adapter", "descr": "Сетевой адаптер WiFi D-Link", "price": "7", "quantity": "0" },
            { "id": 4, "name": "Notebook Lenovo", "descr": "Ноутбук Think Pad T460", "price": "100", "quantity": "2" },
            { "id": 5, "name": "Keyboard OKLICK", "descr": "Клавиатура OKLICK 140M", "price": "50", "quantity": "8" },
            { "id": 6, "name": "Network adapter", "descr": "Сетевой адаптер WiFi D-Link", "price": "7", "quantity": "0" },
        ],
    
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: '10'
        }
    }
});