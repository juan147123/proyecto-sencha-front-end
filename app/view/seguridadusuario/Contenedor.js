
Ext.define('backoffice.view.seguridadusuario.Contenedor',{
    extend: 'Ext.panel.Panel',

    requires: [
        'backoffice.view.seguridadusuario.ContenedorController',
        'backoffice.view.seguridadusuario.ContenedorModel'
    ],

    controller: 'seguridadusuario-contenedor',
    viewModel: {
        type: 'seguridadusuario-contenedor'
    },

    html: 'Hello, World!!'
});
