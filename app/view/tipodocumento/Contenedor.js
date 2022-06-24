
Ext.define('backoffice.view.tipodocumento.Contenedor',{
    extend: 'Ext.container.Container',
    xtype : 'tipodocumento',
    requires: [
        'backoffice.view.tipodocumento.ContenedorController',
        'backoffice.view.tipodocumento.ContenedorModel',
        'backoffice.view.tipodocumento.Listado',
        'backoffice.view.tipodocumento.Registro'
    ],
    itemId : 'tipodocumentoContainer',
    controller: 'tipodocumento-contenedor',
    viewModel: {
        type: 'tipodocumento-contenedor'
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
                  tooltip: 'NUEVO',
                  ui: 'amber',
                  handler :'onClick_CrearTipoDocumento',
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
                  text : 'Tipo Documento',
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
            itemId: 'contentPaneltipodocumento',
            margin: '0 20 20 0',
            flex: 1,
            layout: {
                type : 'card',
                anchor : '100%',
                deferredRender: true,
            },
            items : [
                { 
                    xtype : 'listadotipodocumento',
                },
                {   xtype : 'tipodocumentoregistro'
                },
              
            ]
        };
    }
});
