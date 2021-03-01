Ext.define('Test.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    init: function() {

        this.control({
            'login button': {
                signin: this.signinmain
            }
        });
        
    },

    signinmain: function(username, password) {
    
        if (username === 'admin' && password === 'padmin') {

            Ext.create({
                xtype: 'app-main'
            });

            this.getView().destroy();

        } else {

            Ext.Msg.alert('Ошибка', 'Неправильный логин или пароль');

        }
    }

/*     onLoginClick: function() {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        //localStorage.setItem("TutorialLoggedIn", true);
        

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        

    } */
});