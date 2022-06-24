
Ext.define('backoffice.view.seguridadpermiso.Registro',{
    extend: 'Ext.panel.Panel',

    requires: [
        'backoffice.view.seguridadpermiso.RegistroController',
        'backoffice.view.seguridadpermiso.RegistroModel'
    ],

    controller: 'seguridadpermiso-registro',
    viewModel: {
        type: 'seguridadpermiso-registro'
    },

    html: 'Hello, World!!'
});
