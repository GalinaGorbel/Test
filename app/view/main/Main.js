/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Test.view.main.Main', {
    
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    

    requires: [

        'Test.view.main.MainController',
        'Test.view.main.MainModel',
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    items: [
        { title: 'Главное окно'},    
        { xtype: 'button', text: 'Товары', itemId:'goods',
        listeners: {
            click: function() {

                var tabPanel = (this.up('app-main').down('#myTabPanel'));

                this.fireEvent('addTab', tabPanel);
            } 
            }
        },
        { xtype: 'button', text: 'Выход', itemId: 'exit' },
        { xtype: 'tabpanel', itemId: 'myTabPanel'}
    ]
});
