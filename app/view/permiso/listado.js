
Ext.define('backoffice.view.permiso.listado',{
    extend: 'Ext.panel.Panel',

    requires: [
        'backoffice.view.permiso.listadoController',
        'backoffice.view.permiso.listadoModel'
    ],

    controller: 'permiso-listado',
    viewModel: {
        type: 'permiso-listado'
    },

    html: 'Hello, World!!'
});
