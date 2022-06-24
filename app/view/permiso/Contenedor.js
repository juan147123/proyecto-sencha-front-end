
Ext.define('backoffice.view.permiso.Contenedor',{
    extend: 'Ext.panel.Panel',

    requires: [
        'backoffice.view.permiso.ContenedorController',
        'backoffice.view.permiso.ContenedorModel'
    ],

    controller: 'permiso-contenedor',
    viewModel: {
        type: 'permiso-contenedor'
    },

    html: 'Hello, World!!'
});
