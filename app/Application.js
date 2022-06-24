

Ext.define('backoffice.Application', {
    extend: 'Ext.app.Application',

    name: 'backoffice',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    models : [
        'Spent'
    ],
    views :[
        //TODO: CORE

        //FATURACION
        'backoffice.view.gasto.Contenedor',
        
    ],
    stores: [
        
     /*  'MarcaModelos',*/
       'NavigationTree',
     /*   'Static',
       'Jwt', */
       'Spent',
       
       
    ],
    //defaultToken : 'conductor',
    launch: function () {
        tools.Util.setVistas('backoffice.view');
        tools.Util.setStores('backoffice.store');

        Ext.util.Format.decimalSeparator  = '.';
        Ext.util.Format.thousandSeparator = ' ';
        Ext.util.Format.currencyPrecision = 5;
        Ext.util.Format.currencySign ='S/.';
        document.getElementById("splashscreen").style.display = 'none';
        //tools.Firebase.connect();

        //Development
        axios.defaults.baseURL = Ext.manifest.api;
        
        /* Ext.create('backoffice.view.login.Login'); */
        Ext.create('backoffice.view.main.Main');
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Actualizacion de Aplicación', 'Esta aplicacion tiene una actualizacion, recargar?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
