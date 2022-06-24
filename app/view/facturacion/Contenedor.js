
Ext.define('backoffice.view.facturacion.Contenedor', {
    extend: 'Ext.panel.Panel',
    xtype: 'facturacion',
    requires: [
        'backoffice.view.facturacion.ContenedorController',
        'backoffice.view.facturacion.ContenedorModel',
        'backoffice.view.facturacion.ListadoFacturacion',
        'backoffice.view.facturacion.ListadoPagos',
        'backoffice.view.facturacion.ResumenDiario',
    ],
    controller: 'facturacion-contenedor',
    viewModel: {
        type: 'facturacion-contenedor'
    },
    itemId: 'facturacionContainer',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    margin: '10 10 10 10',
    initComponent: function () {
        me = this;
        Ext.apply(this, {
            items: [
                // me._buscador(),
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
            xtype: 'container',
            itemId: 'panelFacturacion',
            //margin: '0 20 20 0',
            flex: 1,
            layout: {
                type: 'card',
                anchor: '100%',
                deferredRender: true,
            },
            items: [
                me._listado(),/* 
               me._registro() */

            ]
        };
    },
    _listado: function () {
        return {
            xtype: 'listado-facturacion'
        };
    }/* ,
    _registro:function(){
        return {
            xtype : 'cotizacion-registro'
        };
    } */
});

