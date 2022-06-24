
Ext.define('backoffice.view.inventario.Contenedor', {
    extend: 'Ext.panel.Panel',
    xtype: 'inventario',
    requires: [
        'backoffice.view.inventario.ContenedorController',
        'backoffice.view.inventario.ContenedorModel',
        'backoffice.view.inventario.ReposicionStock',
        'backoffice.view.inventario.GeneraReposicionStock',
        'backoffice.view.inventario.IngresoAlmacen',
        'backoffice.view.inventario.AlmacenPrincipal',
        'backoffice.view.inventario.GuiaEntradaAlmacenLocal',
        'backoffice.view.inventario.GuiaSalidaAlmacen',
        'backoffice.view.inventario.DetalleReposicion',
       // 'backoffice.view.producto.Listado',
       // 'backoffice.view.producto.Registro'
    ],
    itemId: 'inventarioContainer',
    controller: 'inventario-contenedor',
    viewModel: {
        type: 'inventario-contenedor'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    margin: '10 10 10 10',
    initComponent: function () {
        me = this;
        Ext.apply(this, {
            items: [
                me._contenedor()

            ]
        });
        this.callParent();
    },
    _buscador: function () {
        return {
            xtype: 'toolbar',
            margin: '0 20 10 0',
            items: [
                {
                    xtype: 'label',
                    text: 'Usuarios',
                    style: {
                        color: '#333333',
                        fontSize: '25px',
                        textAlign: 'center'

                    },
                },
                '->',
                {
                    xtype: 'button', // default for Toolbars
                    ui: 'amber',
                    tooltip: 'NUEVO',
                    iconCls: 'fa fa-user-plus',
                    handler: 'onClick_CrearUsuario'
                },
                {
                    xtype: 'button', // default for Toolbars
                    tooltip: 'RECARGAR',
                    ui: 'amber',
                    handler: 'onClick_RecargarLista',
                    iconCls: 'fa fa-refresh'
                },


            ]
        };
    },
    _contenedor: function () {
        return {
            xtype: 'tabpanel',
            ui: 'tab-venta',
            flex: 1,
            plain: true,
            padding: 25,
            defaults: {
                bodyPadding: 10,
                scrollable: true,
                border: false
            },
            items: [
                {
                    title: '<b>Reposicion Stock</b>',
                    itemId: 'panelReposicionStock',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        { xtype: 'reposicion-stock' },
                        { xtype: 'genera-reposicion-stock' },
                        { xtype: 'guia-entrada-almacen-local' },
                        { xtype: 'detalle-reposicion' }
                    ]
                }, {
                    title: '<b>Almacen Central</b>',
                    itemId: 'panelAlmacenCentral',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },

                    items: [
                        { xtype: 'almacen-principal' },
                        { xtype: 'guia-salida-almacen' },
                        { xtype: 'detalle-reposicion' }
                    ]
                },
            ]
        };
    }
});
