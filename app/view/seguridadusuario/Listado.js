
Ext.define('backoffice.view.seguridadusuario.Listado',{
    extend: 'Ext.panel.Panel',

    requires: [
        'backoffice.view.seguridadusuario.ListadoController',
        'backoffice.view.seguridadusuario.ListadoModel'
    ],

    controller: 'seguridadusuario-listado',
    viewModel: {
        type: 'seguridadusuario-listado'
    },

    html: 'Hello, World!!'
});
