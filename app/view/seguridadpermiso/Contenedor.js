
Ext.define('backoffice.view.seguridadpermiso.Contenedor',{
    extend: 'Ext.panel.Panel',

    requires: [
        'backoffice.view.seguridadpermiso.ContenedorController',
        'backoffice.view.seguridadpermiso.ContenedorModel'
    ],

    controller: 'seguridadpermiso-contenedor',
    viewModel: {
        type: 'seguridadpermiso-contenedor'
    },

    html: 'Hello, World!!'
});
