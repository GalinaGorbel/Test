/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Test.view.main.MainController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    init: function() {
        this.control({
            '#exit': {
                click: 'closeShop'
            },
            '#goods': {
                addTab: this.addTab
            },
            'form button': {
                onSaveTap: this.onSaveTap
            }
        });
    },

    closeShop: function() {

        Ext.create({
            xtype: 'login'
        });

        this.getView().destroy();
    },

    addTab: function(tabPanel) {
        
        var newTab = {
            xtype: 'panel',
            title: 'Товары',
            closable: true,
            items: [
                {
                    xtype: 'shop' 
                    //xtype: 'cardPanel'
                }
            ]
        };
        tabPanel.setActiveTab(newTab);
    }

});
