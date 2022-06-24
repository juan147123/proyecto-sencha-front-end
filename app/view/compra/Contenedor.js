
Ext.define('backoffice.view.compra.Contenedor',{
    extend: 'Ext.panel.Panel',
    xtype: 'compra',
    requires: [
        'backoffice.view.compra.ContenedorController',
        'backoffice.view.compra.ContenedorModel',
        'backoffice.view.compra.ListadoCompra',
        'backoffice.view.compra.Registro'
        
    ],

    controller: 'compra-contenedor',
    viewModel: {
        type: 'compra-contenedor'
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
              //  me._buscador(),
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
            ui: 'tab-compra',
            flex: 1,
            plain: true,
            padding: 5,
            defaults: {
                bodyPadding: 10,
                scrollable: true,
                border: false
            },
            items: [
                {
                    title: '<b>Compras</b>',
                    itemId : 'panelCompra',
                    layout: {
                        type : 'card',
                        anchor : '100%',
                        deferredRender: true,
                    },
                    items: [
                        { xtype: 'listado-compra' }, // 0
                        { xtype: 'registro-compra' }, // 1
                    ]
                },
                {
                    title: '<b>Ventas</b>',
                    itemId : 'panelVentas',
                    layout: {
                        type : 'card',
                        anchor : '100%',
                        deferredRender: true,
                    },
                    items: [
                        {xtype: 'listado-venta'},
                        { xtype: 'venta-facturacion' }
                    ]
                }, {
                    title: '<b>Factuación</b>',
                    itemId : 'panelFacturacion',
                    layout: {
                        type : 'card',
                        anchor : '100%',
                        deferredRender: true,
                    },
                    items: [
                        { xtype: 'listado-facturacion' }
                       
                    ]
                },

            ]
        };
    }
});
