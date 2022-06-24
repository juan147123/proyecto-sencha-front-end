
Ext.define('backoffice.view.proveedor.ListadoTerminadoMonofocal',{
    extend: 'Ext.grid.Panel',
    xtype : 'proveedor-ListadoTerminadoMonofocal',
    requires: [
        'backoffice.view.proveedor.ListadoTerminadoMonofocalController',
        'backoffice.view.proveedor.ListadoTerminadoMonofocalModel'
    ],

    controller: 'proveedor-listadoterminadomonofocal',
    viewModel: {
        type: 'proveedor-listadoterminadomonofocal'
    },

    html: 'Hello, World!!'
});
