
Ext.define('backoffice.view.seguridadpermiso.Listado',{
    extend: 'Ext.panel.Panel',

    requires: [
        'backoffice.view.seguridadpermiso.ListadoController',
        'backoffice.view.seguridadpermiso.ListadoModel'
    ],

    controller: 'seguridadpermiso-listado',
    viewModel: {
        type: 'seguridadpermiso-listado'
    },

    html: 'Hello, World!!'
});
