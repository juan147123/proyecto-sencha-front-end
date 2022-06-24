
Ext.define('backoffice.view.estado.Contenedor',{
    extend: 'Ext.container.Container',
    xtype : 'estado',
    requires: [
        'backoffice.view.estado.ContenedorController',
        'backoffice.view.estado.ContenedorModel',
        'backoffice.view.estado.Listado',
        'backoffice.view.estado.Registro'
    ],
    itemId : 'estadoContainer',
    controller: 'estado-contenedor',
    viewModel: {
        type: 'estado-contenedor'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    margin: '20 0 0 20',
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
                  text: 'NUEVO',
                  ui: 'amber',
                  handler :'onClick_CrearEstado',
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
                  text : 'Estados Conductor',
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
            itemId: 'contentPanelestado',
            margin: '0 20 20 0',
            flex: 1,
            layout: {
                type : 'card',
                anchor : '100%',
                deferredRender: true,
            },
            autoScroll:true,
            items : [
                { 
                    xtype : 'listadoestado',
                },
                {   xtype : 'estadoregistro'
                },
              
            ]
        };
    }

});
