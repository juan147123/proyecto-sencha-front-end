
Ext.define('backoffice.view.descuento.Contenedor',{
    extend: 'Ext.panel.Panel',
    xtype : 'descuento',
    requires: [
        'backoffice.view.descuento.ContenedorController',
        'backoffice.view.descuento.ContenedorModel',
        'backoffice.view.descuento.ListadoDescuento',
        'backoffice.view.descuento.FormDescuento'
    ],

    controller: 'descuento-contenedor',
    viewModel: {
        type: 'descuento-contenedor'
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
            itemId: 'panelDescuento',
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
            xtype :'listado-descuento'
        };
    },
    _registro:function(){
        return {
            xtype : 'form-descuento'
        };
    }
});
