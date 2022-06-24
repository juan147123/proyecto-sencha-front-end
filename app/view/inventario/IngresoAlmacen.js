
Ext.define('backoffice.view.inventario.IngresoAlmacen',{
    extend: 'Ext.panel.Panel',
    xtype : 'ingreso-almacen',
    requires: [
        'backoffice.view.inventario.IngresoAlmacenController',
        'backoffice.view.inventario.IngresoAlmacenModel'
    ],

    controller: 'inventario-ingresoalmacen',
    viewModel: {
        type: 'inventario-ingresoalmacen'
    },

    html: 'Hello, almacen!!'
});
