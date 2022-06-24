
Ext.define('backoffice.view.compra.Registro',{
    extend: 'Ext.panel.Panel',
    xtype: 'registro-compra',
    requires: [
        'backoffice.view.compra.RegistroController',
        'backoffice.view.compra.RegistroModel'
    ],

    controller: 'compra-registro',
    viewModel: {
        type: 'compra-registro'
    },

    html: 'formulario!!'
});
