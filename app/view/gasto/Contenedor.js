
Ext.define('backoffice.view.gasto.Contenedor',{
    extend: 'Ext.panel.Panel',
    xtype : 'gastos',
    requires: [
        'backoffice.view.gasto.ContenedorController',
        'backoffice.view.gasto.ContenedorModel',
        'backoffice.view.gasto.Listado',
        'backoffice.view.gasto.Registro'
    ],

    controller: 'gasto-contenedor',
    viewModel: {
        type: 'gasto-contenedor'
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
            itemId: 'contentPanelGastos',
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
            xtype :'gasto-listado'
        };
    },
    _registro:function(){
        return {
            xtype : 'gasto-registro'
        };
    }
});
