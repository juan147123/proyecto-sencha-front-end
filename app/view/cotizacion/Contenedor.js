
Ext.define('backoffice.view.cotizacion.Contenedor', {
    extend: 'Ext.panel.Panel',
    xtype: 'cotizacion',
    requires: [
        'backoffice.view.cotizacion.ContenedorController',
        'backoffice.view.cotizacion.ContenedorModel',
        'backoffice.view.cotizacion.ListadoCotizacion',

        'backoffice.view.cotizacion.ListadoCotizacion',
        'backoffice.view.cotizacion.Cotizacion',

        'backoffice.view.cotizacion.BuscarProducto'
    ],
    controller: 'cotizacion-contenedor',
    viewModel: {
        type: 'cotizacion-contenedor'
    },
    itemId: 'cotizacionContainer',
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
    _titulo:function(){
        return {
            xtype :'container',
            userCls: 'big-100 small-100',
            html : '<div style="font-size:25px;">Cotizaciones</div><p><p>[descripcion].'
            
        }
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
    _contenedor:function(){
        return   {
            xtype: 'container',
            itemId: 'contentPanelCotizacion',
            //margin: '0 20 20 0',
            flex: 1,
            layout: {
                type : 'card',
                anchor : '100%',
                deferredRender: true,
            },
             items : [
                me._listado(),
               me._registro()
              
            ]
        };
    },
    _listado:function(){
        return {
            xtype : 'listado-cotizacion'
        };
    },
    _registro:function(){
        return {
            xtype : 'cotizacion-registro',
            itemId: 'cotizacion-registro',
        };
    }
});

