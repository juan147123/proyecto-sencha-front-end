
Ext.define('backoffice.view.permiso.Registro',{
    extend: 'Ext.panel.Panel',

    requires: [
        'backoffice.view.permiso.RegistroController',
        'backoffice.view.permiso.RegistroModel'
    ],

    controller: 'permiso-registro',
    viewModel: {
        type: 'permiso-registro'
    },

    html: 'Hello, World!!'
});
