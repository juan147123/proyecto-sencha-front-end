
Ext.define('backoffice.view.inventario.GuiaSalidaAlmacen',{
    extend: 'Ext.panel.Panel',
    xtype :'guia-salida-almacen',
    requires: [
        'backoffice.view.inventario.GuiaSalidaAlmacenController',
        'backoffice.view.inventario.GuiaSalidaAlmacenModel'
    ],

    controller: 'inventario-guiasalidaalmacen',
    viewModel: {
        type: 'inventario-guiasalidaalmacen'
    },

    html: 'guia salida almacen!!'
});
