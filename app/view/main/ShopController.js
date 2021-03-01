Ext.define('Test.view.main.ShopController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.shop',
    
    onSearchIdHandler: function (obj, e, oPt) {
        var value; 

            if (e.getKey() == e.ENTER) {
            
                value = obj.getValue();
            
                if (obj.reference == 'searchText') {
                
                    this.view.getStore().filter('descr', value);
                
                } else if (obj.reference == 'searchId') {
                
                    this.view.getStore().filter('id', value);
                }
            }  
    },
    onItemClick: function (obj, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var store = this.getView().getStore();

        if (cellIndex == 1) {
                let win = Ext.create('widget.window', {
                        modal: true,
                        closeAction: 'destroy',
                        width: 400,
                        controller: 'main',
                        viewModel: {
                            data: {
                                record: record.data
                            }
                        },
                        bind: {
                            title: 'Карточка товара {record.name}'
                        },
                        items: [{
                            xtype: 'form',
                            margin: 10,
                            items: [
                                {
                                   xtype: 'displayfield',
                                   name: 'displayfield1',
                                   fieldLabel: 'ID',
                                   bind: {
                                    value: '{record.id}'
                                   }
                                },
                                {
                                   xtype: 'displayfield',
                                   name: 'displayfield2',
                                   fieldLabel: 'Наименование',
                                   bind: {
                                    value: '{record.descr}'
                                   }
                               },
                               {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Цена',
                                    name: 'price',
                                    itemId: 'fieldPrice',
                                    minValue: 0,
                                    step: 0.1,
                                    bind: {
                                     value: '{record.price}'
                                    }
                                }, 
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: 'Кол-во',
                                    name: 'quantity',
                                    itemId: 'fieldQuantity',
                                    minValue: 0,
                                    maxValue: 100,
                                    allowDecimals: true,
                                    decimalPrecision: 1,
                                    bind: {
                                     value: '{record.quantity}'
                                    }
                                }
                            ],
                            buttons: [{
                                text: 'Сохранить',
        
                                listeners: {
                                    click: function() {
                                        let dataStore = store.getData().items[rowIndex],
                                            formPrice = this.up('form').getValues().price,
                                            formQuantity = this.up('form').getValues().quantity;

                                            if (dataStore.get('price') != formPrice || dataStore.get('quantity') != formQuantity) {

                                                Ext.Msg.alert('Внимание', 'Данные были изменены');

                                                dataStore.set('price', formPrice);
                                                dataStore.set('quantity', formQuantity);

                                                store.load();
                                            }

                                        win.close();
                                    }
                                },
                            }, 
                            {
                                text: 'Отмена',
                                handler: function() {
                                    win.close();
                                }
                            }]
                        }],      
                });
                
                win.show();
        }     
    }
});