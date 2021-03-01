Ext.define('Test.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Test.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Окно входа',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            itemId: 'username',
            fieldLabel: 'Пользователь',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            itemId: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Введите Ваш пароль'
        }],
        buttons: [{
            text: 'Войти',
            formBind: true,
            listeners: {
                //click: 'onLoginClick',
                click: function() {
                    
                    var username = this.up('form').down('#username').getValue();
                    var password = this.up('form').down('#password').getValue();
                    this.fireEvent('signin', username, password);
                } 
            }
        }]
    }
});