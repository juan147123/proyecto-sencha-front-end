
Ext.define('backoffice.view.seguridadusuario.Registro',{
    extend: 'Ext.panel.Panel',

    requires: [
        'backoffice.view.seguridadusuario.RegistroController',
        'backoffice.view.seguridadusuario.RegistroModel'
    ],

    controller: 'seguridadusuario-registro',
    viewModel: {
        type: 'seguridadusuario-registro'
    },

    html: 'Hello, World!!'
});
