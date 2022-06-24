
Ext.define('backoffice.view.banco.Contenedor',{
    extend: 'Ext.container.Container',
    xtype : 'banco',

    requires: [
        'backoffice.view.banco.ContenedorController',
        'backoffice.view.banco.ContenedorModel',
        'backoffice.view.banco.Listado',
        'backoffice.view.banco.Registro'
    ],
    itemId : 'bancoContainer',
    controller: 'banco-contenedor',
    viewModel: {
        type: 'banco-contenedor'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    margin: '20 20 20 20',
    initComponent:function(){
        me = this;
        Ext.apply(this, {
            items: [
               me._buscador(),
               me._contenedor()
              
            ]
        });
        this.callParent();
    },
    _buscador:function(){
        return  {
            xtype : 'toolbar',
            margin: '0 20 10 0',
            items : [
            
              {
                  xtype: 'button', // default for Toolbars
                  tooltip: 'NUEVO',
                  ui: 'amber',
                  handler :'onClick_CrearBanco',
                  iconCls : 'fa fa-plus'
              },
              {
                xtype: 'button', // default for Toolbars
                tooltip: 'RECARGAR',
                ui: 'amber',
                handler :'onClick_RecargarLista',
                iconCls : 'fa fa-refresh'
            },
              '->',
              {
                  xtype : 'label',
                  text : 'Banco',
                  style: {
                    color: '#333333',
                    fontSize:'25px',
                    textAlign: 'center'
                    
                },
              }

            
            ]
        };
    },
    _contenedor:function(){
        return   {
            xtype: 'container',
            itemId: 'contentPanelbanco',
            margin: '0 20 20 0',
            flex: 1,
            layout: {
                type : 'card',
                anchor : '100%',
                deferredRender: true,
            },
             items : [
                { 
                    xtype : 'listadobanco',
                },
                {   xtype : 'bancoregistro'
                },
              
            ]
        };
    }
});
