
Ext.define('backoffice.view.proveedor.Contenedor',{
    extend: 'Ext.panel.Panel',
    xtype: 'proveedor-pedido',
    requires: [
        'backoffice.view.proveedor.ContenedorController',
        'backoffice.view.proveedor.ContenedorModel',
        'backoffice.view.proveedor.Pedido',
        'backoffice.view.proveedor.ListadoPedido'
    ],
    controller: 'proveedor-contenedor',
    viewModel: {
        type: 'proveedor-contenedor'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    margin: '20 20 20 20',
    initComponent:function(){
        me = this;
        Ext.apply(me, {
            items:[
              me._contenedor()
            ]
        });
        me.callParent();
    },
    _titulo:function(){
        return {
            xtype :'container',
            userCls: 'big-100 small-100',
            html : '<div style="font-size:25px;">Pedido a Proveedor</div><p><p>[descripcion].'
            
        }
    },
    _contenedor:function(){
        return   {
            xtype: 'container',
            itemId: 'contentPanelPedidoProveedor',
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
            xtype : 'proveedor-listado-pedido'
        };
    },
    _registro:function(){
        return {
            xtype : 'proveedor-pedido-excel'
        };
    }
});
