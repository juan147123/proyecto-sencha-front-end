Ext.define('backoffice.view.producto.Contenedor',{
    extend: 'Ext.panel.Panel',
    xtype  :'producto',
    requires: [
        'backoffice.view.producto.ContenedorController',
        'backoffice.view.producto.ContenedorModel',
        'backoffice.view.producto.Listado',
        'backoffice.view.producto.Registro',
        'backoffice.view.producto.AgregarTratamiento'
    ],

    controller: 'producto-contenedor',
    viewModel: {
        type: 'producto-contenedor'
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
            html : '<div style="font-size:25px;">Productos</div><p><p>[descripcion].'
            
        }
    },
    _contenedor:function(){
        return   {
            xtype: 'container',
            itemId: 'contentPanelProducto',
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
            xtype : 'producto-listado'
        };
    },
    _registro:function(){
        return {
            xtype : 'producto-registro'
        };
    }
});
