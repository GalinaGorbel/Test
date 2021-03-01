Ext.define('Test.view.main.Shop', {

    extend: 'Ext.grid.Panel',
    xtype: 'shop',

    requires: [
        'Test.view.main.ShopController',
    ],

    title: 'Учет товаров',
    controller: 'shop',

    height: 400,
    margin: 10,

    store: {
        type: 'Shop'
    }, 

    columns: [

        { text: 'ID', dataIndex: 'id', flex: 1 },
        { text: 'Имя', dataIndex: 'name', flex: 1 },
        { text: 'Описание', dataIndex: 'descr', flex: 2 },
        { text: 'Цена', dataIndex: 'price', flex: 1 },
        { text: 'Кол-во', dataIndex: 'quantity', flex: 1,
                renderer: function(value, meta){
                    if (value == 0){
                        meta.style = "background-color:red;"
                    } 
                    return value;
                }
        },
    ],

    listeners: {
        cellclick: 'onItemClick'
    },

    bbar: {
        xtype: 'pagingtoolbar',
        store: {
            type: 'Shop'
        }, 
        displayInfo: true,
        beforePageText: 'Страница',
        afterPageText: 'из {0}',
        displayMsg: 'Товары {0} - {1} из {2}'
    },

    tbar: [
       
        {
            xtype: 'textfield',
            fieldLabel: 'ID',
            emptyText: 'Введите фильтр...',
            reference: 'searchId',
            enableKeyEvents: true,
            listeners: {
                keyup: 'onSearchIdHandler',
                scope: 'controller'
            }
        },
        {
            xtype: 'textfield', 
            fieldLabel: 'Описание',
            emptyText: 'Введите фильтр...',
            reference: 'searchText',
            enableKeyEvents: true,
            listeners: {
                keyup: 'onSearchIdHandler',
                scope: 'controller'
            }
        }
    ]

});